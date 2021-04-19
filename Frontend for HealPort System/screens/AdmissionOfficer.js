import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image } from 'react-native';

const DATA = [

    {
        id: "S-145723",
        name: "Sumanapala Silva",
        nic: "19839292V",
        tel: '071-74748388237'
    },
    {
        id: "S-8726563",
        name: "Somalatha Sumana ",
        nic: "19839292V",
        tel: '071-74748386237'
    },
    {
        id: "S-586945",
        name: "Appuhamige Appuhami ",
        nic: "19839292V",
        tel: '071-74748388247'
    },
    {
        id: "S-536945",
        name: "Appuhamioge Appuhami ",
        nic: "19839392V",
        tel: '071-74748368237'
    },
    {
        id: "S-576945",
        name: "Gunaya Appuhami ",
        nic: "19839392V",
        tel: '071-74748388337'
    },
    {
        id: "S-588945",
        name: "Malagala Appuhami ",
        nic: "19839592V",
        tel: '071-74748388237'
    },
];
const AdmissionOfficer = ({ navigation }) => {
    const pressHandler = () => {
        navigation.push('Discharge')
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* <View style = {styles.cover}>
                <Image 
                source={require('../Images/AO-2.png')}
                style={{ width: '100%', height: '100%' ,alignItems: 'center',justifyContent: 'center', marginTop:10,}}
            /> 
            </View> */}


            <FlatList
                data={DATA}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return <TouchableOpacity style={{ margin: 10, margin: 20 }}>
                        <View style={{ flex: 1, padding: 10 }}>

                            <View
                                style={[
                                    StyleSheet.absoluteFillObject,
                                    { backgroundColor: '#b4d8ed', borderRadius: 16, }
                                ]} />
                            <Image source={require('../Images/AO-1.png')} style={styles.image} />
                            <Text style={styles.name} > {item.name} </Text>
                            <Text style={styles.num} > Reg Number - {item.id} </Text>
                            <Text style={styles.nic} > NIC - {item.nic} </Text>
                            <Text style={styles.tel} > Contact - {item.tel} </Text>

                            <TouchableOpacity
                                style={styles.button} onPress={pressHandler}>
                                <Text style={styles.buttonText} >Admit</Text>
                            </TouchableOpacity>

                        </View>

                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

export default AdmissionOfficer

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
        backgroundColor: '#456b82',
        width: 100,
        marginBottom: 80,
        borderRadius: 200,
        position: 'absolute',
        top: 35,
        right: 10,
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
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
        fontWeight: '700',
        fontSize: 18,
        left: 60,
    },
    num: {
        left: 60,
    },
    nic: {
        left: 60,
    },
    tel: {
        left: 60,
    }
})
