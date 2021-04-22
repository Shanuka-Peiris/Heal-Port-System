import React, { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Alert , Image, ActivityIndicator} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const DiseaseScreen = ({ route, navigation}) => {

    const [ disease, setDisease ] = useState([]);
    const [ state, setState ] = useState(0);
    const [ animating, setAnimating ] = useState(true)

    var name = route.params.paramKey
    var symptoms = route.params.paramKey1
    var at = 0


    // const diseaseList = route.params.paramKey
    // setDisease(diseaseList)
    // console.log(disease)

    // Submits all symptoms of the user to the screen

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
            console.log(responseData)
            const diseaseList = responseData;
            setDisease(diseaseList)
            // navigation.push('Disease')
        })
        .catch ((err) => {
            console.log(err)
        })
        
    }
    const requestToAdmit = () => {
        
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