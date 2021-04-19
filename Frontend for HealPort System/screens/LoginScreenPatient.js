import React,  { useState, useLayoutEffect } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Image, Input, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const LoginScreenPatient = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [fontLoaded, setfontLoaded] = useState(false);

    if(!fontLoaded){
        return <AppLoading startAsync = {fetchFont} 
        onError = {() => console.log("ERROR")}
        onFinish = {() => {
            setfontLoaded(true);
        }}
        />;
    }
   

    const pressHandler1 = () => {
        // navigation.push('Symptoms')

        fetch("http://10.0.2.2:3000/patient/signIn",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "userName":userName,
            "password":password
        })
        })
        .then(res=>res.json())
        .then(async (data)=>{
            try {
                await AsyncStorage.setItem('token',data.token)
                console.log(data.token)
                navigation.replace('symptoms', {
                    paramKey: userName,
                })
            } catch (e) {
                console.log("Error", e)
                Alert.alert("Username or password is incorrect")
            }
        })
    }

    const pressHandler = () => {
        navigation.push('Patient Registration')
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
           <StatusBar style={"light"} />
           <Image 
                source={require('../Images/logo-4.png')}
               style={{ width: 350, height: 250, marginBottom: 40 }}
            />

            <View style={styles.inputContainer}>
                <Input 
                    style={styles.input}
                    placeholder="User Name"
                    autoFocus
                    type="text"
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                />

                <Input 
                    style={styles.input}
                    placeholder="Password" 
                    secureTextEntry={true}
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <TouchableOpacity 
                activeOpacity={0.5} 
                style={styles.buttonLogin}
                onPress={pressHandler1}
            >
                <Text style={styles.buttonTextLogin}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.buttonRegister}
                onPress={pressHandler}
            >
                <Text style={styles.buttonTextRegister}>Register</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default LoginScreenPatient;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    inputContainer: {
        width: 300,
    },
    buttonLogin: {
        width: 200,
        marginTop: 10,
        textAlign: "center",
        borderRadius: 10,
        padding: 10,
        borderWidth: 3,
        borderColor: "#004644",
        backgroundColor: '#CAE0DB',
    },
    buttonRegister: {
        width: 200,
        marginTop: 10,
        textAlign: "center",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: "#004644",
    },
    buttonTextLogin: {
        textAlign: 'center',
        fontSize: 20,
        color: "#004644",
        fontFamily:"YuseiMagic-Regular",
    },
    buttonTextRegister: {
        textAlign: 'center',
        fontSize: 20,
        color: "#004644",
        fontFamily:"YuseiMagic-Regular",
    },
    input: {
        fontFamily:"YuseiMagic-Regular",
        color:'black'
    },
}); 
