import React ,{useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFont = () => {
    return Font.loadAsync({
      "Ledger-Regular" : require("../assets/fonts/Ledger-Regular.ttf"),
      "Sacramento" :  require("../assets/fonts/Sacramento-Regular.ttf"),
      "Vidaloka-Regular" :  require("../assets/fonts/Vidaloka-Regular.ttf"),
      "YuseiMagic-Regular" :  require("../assets/fonts/YuseiMagic-Regular.ttf"),
    });
  };

const DATA = [

    {

        name: "Sumanapala Silva",
        nic: "19839292V",
        tel: '071-7474838'
    },
    {

        name: "Somalatha Sumana ",
        nic: "19839292V",
        tel: '071-7474838'
    },
    {

        name: " nuwan nuwan ",
        nic: "19839292V",
        tel: '071-7474838'
    },
    {

        name: "sarath kumara ",
        nic: "19839292V",
        tel: '071-7474838'
    },
    {

        name: "rathnayake  ",
        nic: "19839392V",
        tel: '071-7474836'
    },
    {

        name: "Gunaya Appuhami ",
        nic: "19839392V",
        tel: '071-74748388337'
    },


];
const NonPneumoniaList = ({ navigation }) => {
    const [fontLoaded, setfontLoaded] = useState(false);

    if(!fontLoaded){
        return <AppLoading startAsync = {fetchFont} 
        onError = {() => console.log("ERROR")}
        onFinish = {() => {
            setfontLoaded(true);
        }}
        />;
    }
    const pressHandler = () => {
        navigation.push('check')
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#b4d8ed',marginTop:40, }}>
            <Image source={require('./../Images/x-ray-3.gif')} style={styles.imageGif} />
            <FlatList
                data={DATA}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return <TouchableOpacity style={{ margin: 10, margin: 20 }}>
                        <View style={{ flex: 1, padding: 10 }}>
                            <View
                                style={[
                                    StyleSheet.absoluteFillObject,
                                    { backgroundColor: '#3EAB90', borderRadius: 16, }
                                ]} />
                            <Image source={require('../Images/AO-1.png')} style={styles.image} />
                            <Text style={styles.name} >{item.name} </Text>

                            <Text style={styles.nic} > NIC - {item.nic} </Text>
                            <Text style={styles.tel} > Contact - {item.tel} </Text>

                            <TouchableOpacity
                                style={styles.button} onPress={pressHandler}>
                                <Text style={styles.buttonText} >X-ray</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

export default NonPneumoniaList

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
        width: 100,
        marginBottom: 80,
        borderRadius: 200,
        position: 'absolute',
        top: 60,
        right: 10,
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
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
    imageGif: {
        height: 250,
        width: 400,
        backgroundColor: '#dae2f0',
        marginBottom: 5,
        resizeMode: "cover",
    },
    name: {
        fontSize: 20,
        left: 60,
        fontFamily:"YuseiMagic-Regular",
    },
    num: {
        left: 60,
        fontFamily:"YuseiMagic-Regular",
    },
    nic: {
        left: 60,
        fontFamily:"YuseiMagic-Regular",
    },
    tel: {
        left: 60,
        fontFamily:"YuseiMagic-Regular",
    }
})
