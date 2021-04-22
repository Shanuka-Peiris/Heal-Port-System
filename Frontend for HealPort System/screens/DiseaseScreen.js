import React, { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Alert , Image, ActivityIndicator} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const DiseaseScreen = ({ route, navigation}) => {

    var name = route.params.paramKey
    var symptoms = route.params.paramKey1

    const [ disease, setDisease ] = useState([]);
    const [ state, setState ] = useState(0);
    const [ animating, setAnimating ] = useState(true)
    const [ btnState, setBtnState ] = useState(false)

    // ---------------------------------------------------------------------------------
    const submitSymptoms = () => {
    
        fetch('http://192.168.249.152:3000/getSymptoms', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body :JSON.stringify({
                userName: name,
                symptoms: symptoms
            }) 
        })
        .then ((response) => response.json())
        .then ((responseData) => {
            setAnimating(false)
            const diseaseList = responseData;
            setDisease(diseaseList)

            if (responseData.includes("Pneumonia")) {
                console.log("is pneumonia")
            } else{ 
                setBtnState(true)
            }
        })
        .catch ((err) => {
            console.log(err)
        })   
    }

    const changeState = () => {
        if (state == 1) {
            console.log("State is now one")
        } else {
            setState(1)
            submitSymptoms()
        }
    }

    changeState()

    // ---------------------------------------------------------------------------------
    
    const getDetails = () => {
        // fetch('http://192.168.249.152:3000/retrieve/information/patientInfo', {
        fetch('http://192.168.249.152:3000/retrieve/information', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body :JSON.stringify({
                userName: name,
            }) 
        })
        .then((response) => response.json())
        .then((responseData) => {
            // setDiseaseList(responseData)
            console.log(responseData)
            if (responseData.name == name) {
                setBtnState(true)
            } else {
                // admitPatient(responseData)
                // saveSymptoms();
            }
            // admitUser(responseData)
            // admitPatient(responseData)
            // saveSymptoms();
        })
        .catch((error) => {
            console.log(error)
            // Alert.alert("Something went wrong while retrieving data")
        })
    }

    getDetails()
    
    // ---------------------------------------------------------------------------------
    
    const saveSymptoms = () => {
        fetch("http://192.168.249.152:3000/save/Symptoms",{
            method:"post",
            headers:{
                'Content-Type': 'application/json'
            },
        body:JSON.stringify({
                userName: name,
                symptoms: symptoms
            })
        })
        .then(res=>res.json())
        .then(data=>{
            navigation.replace("Symptoms")
        })
        .catch(err=>{
            Alert.alert("Something went wrong")
        })
    }

    const admitPatient = (responseData) => {
        fetch("http://192.168.249.152:3000/save/admitPatient", {
            method:"post",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                userName: name,
                firstName: responseData.firstName,
                lastName: responseData.lastName,
                nicNumber: responseData.niceNumber,
                contactNumber: responseData.contactNumber
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData)
            if (responseData == "Successful") {
                Alert.alert("Admission successful")
            } 
        })
        .catch((error) => {
            Alert.alert("Error while admitting patient")
        })
    }

    const requestToAdmit = () => {
        fetch('http://192.168.249.152:3000/retrieve/information/patientInfo', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body :JSON.stringify({
                userName: name,
            }) 
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData)

            admitPatient(responseData)
            saveSymptoms();
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <View style = {styles.container}>
            <Image 
                    source={require('../Images/disease.png')}
                    style={{ width: 400, height: 155,  }}
            />
            <Text style= {styles.header}> DISEASES </Text>
            
            
            <ScrollView backgroundColor = "#9fc9c0" borderColor = "white" borderWidth =  {5} >
                <View style = {styles.loader}>
                    <ActivityIndicator
                    animating = {animating}
                    color = "white"
                    size = "large"
                    />
                
                {disease && disease.map((d, index) => <Text style={styles.diseaseText} key={index}>{d}</Text>)}
                </View>
            </ScrollView>
               
            <TouchableOpacity
                style={styles.button}
                onPress={requestToAdmit}
                disabled = {btnState}
            >
                <Text style={styles.buttonText} >Admit</Text>
            </TouchableOpacity> 
            
        </View>
    )
}

export default DiseaseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAE0DB',
        padding: 10,
        marginTop:35,
    },
    header:{
        fontSize: 35,
        textAlign: 'center',
        color: 'black',
        marginBottom: 20,
        color: "#004644",
        fontFamily:"YuseiMagic-Regular",
    },
    diseaseText:{
        height: 50,
        width: 200,
        backgroundColor:'white',
        fontFamily:"YuseiMagic-Regular",
        fontSize: 20,
        textAlign: "center",
        marginTop: 40,
        borderRadius: 10,
        marginLeft:90,
        padding: 10,
    },
    button: {
        width: 200,
        marginLeft: 90,
        marginBottom :20,
        marginTop:40,
        textAlign: "center",
        borderRadius: 10,
        padding: 10,
        borderWidth: 3,
        borderColor: '#3EAB90',
        backgroundColor: '#3EAB90',
        borderRadius: 13,
        borderColor: "white",
        borderWidth: 3,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily:"YuseiMagic-Regular",
        color: 'white', 
    },
    loader:{
        height: 500,
        width: 355,
        textAlign: 'center',
        marginTop:20,
    }
})