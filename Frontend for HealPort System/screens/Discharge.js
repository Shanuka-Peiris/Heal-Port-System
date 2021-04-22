import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image } from 'react-native';

const Discharge = ({ navigation }) => {

    const [discharge, setDischarge] = useState([]);
    const [ state, setState ] = useState(0)

    const getAdmittedPatients = () => {
        fetch('http://192.168.249.152:3000/retrieve/information/admitted', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body :JSON.stringify({
                userName: "sss",
            }) 
        })
        .then ((response) => response.json())
        .then ((responseData) => {
            console.log(responseData)
            const dischargeList = responseData;
            setDischarge(dischargeList)
        })
        .catch ((err) => {
            console.log(err)
        })
    }

    const changeState = () => {
        if (state == 1) {
            console.log("State is 1 now")
        } else {
            setState(1)
            getAdmittedPatients()
        }
    }

    changeState();

    return (
        <View style={{ flex: 1, backgroundColor: '#b4d8ed' ,marginTop:40}}>
            


            <FlatList
                data={discharge}
                keyExtractor={item => item.firstName}
                renderItem={({ item }) => {
                    return <TouchableOpacity style={{ margin: 10, margin: 20 }}>
                        <View style={{ flex: 1, padding: 10 }}>

                            <View
                                style={[
                                    StyleSheet.absoluteFillObject,
                                    { backgroundColor: '#3EAB90', borderRadius: 16, }
                                ]} />
                            <Image source={require('../Images/AO-3.png')} style={styles.image} />
                            <Text style={styles.name} > {item.firstName + " " + item.lastName} </Text>
                            <Text style={styles.display} > User Name - {item.userName} </Text>
                            <Text style={styles.display} > NIC - {item.nicNumber} </Text>
                            <Text style={styles.display} > Contact No - {item.contactNumber.toString()} </Text>

                            <TouchableOpacity
                                style={styles.button}
                                >
                                <Text style={styles.buttonText} >Discharge</Text>
                            </TouchableOpacity>

                        </View>

                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

export default Discharge

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#b4d8ed',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    cover: {
        height: 100,
        width: '100%',
        marginBottom: 20,

    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 6,
        backgroundColor: '#b4d8ed',
        width: 120,
        marginBottom: 80,
        borderRadius: 200,
        position: 'absolute',
        top: 80,
        right: 1,
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontFamily:"YuseiMagic-Regular",
    },
    pic1: {
        width: 100,
        height: 100,
    },
    image: {
        height: 50,
        width: 50,
        position: 'absolute',
        bottom: 25,
        left: 10,
    },
    name: {
        fontSize: 20,
        left: 60,
        fontFamily:"YuseiMagic-Regular",
    },
    display: {
        left: 60,
        fontFamily:"YuseiMagic-Regular",
    }
})
