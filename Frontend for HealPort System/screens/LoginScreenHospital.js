import React,  { useState, useLayoutEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Image, Input, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginScreenHospital = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const pressHandler = () => {
        navigation.push('Staff')
    }

    const pressHandler1 = () => {
        navigation.push('Staff Registration')
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
           <StatusBar style={"light"} />
           <Image 
                source={{
                    uri: 'https://cesie.org/media/heal-logo.jpg', 
                }}
                style={{ width: 300, height: 200 }}
            />

            <View style={styles.inputContainer}>
                <Input 
                    placeholder="User Name"
                    autoFocus
                    type="text"
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                />

                <Input 
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
                onPress={pressHandler}
            >
                <Text style={styles.buttonTextLogin}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.buttonRegister}
                onPress={pressHandler1}
            >
                <Text style={styles.buttonTextRegister}>Register</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default LoginScreenHospital;

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
        borderColor: "#6e6570",
        backgroundColor: '#6e6570',
    },
    buttonRegister: {
        width: 200,
        marginTop: 10,
        textAlign: "center",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: '#6e6570',
    },
    buttonTextLogin: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    buttonTextRegister: {
        textAlign: 'center',
        fontSize: 15,
        color: '#6e6570',
        fontWeight: 'bold',
    }
});
