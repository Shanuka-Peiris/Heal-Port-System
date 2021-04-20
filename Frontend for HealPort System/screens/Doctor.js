import React , { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const Doctor = ({ navigation }) => {
    const fetchFont = () => {
        return Font.loadAsync({
          "Ledger-Regular" : require("../assets/fonts/Ledger-Regular.ttf"),
          "Sacramento" :  require("../assets/fonts/Sacramento-Regular.ttf"),
          "Vidaloka-Regular" :  require("../assets/fonts/Vidaloka-Regular.ttf"),
          "YuseiMagic-Regular" :  require("../assets/fonts/YuseiMagic-Regular.ttf"),
        });
      };
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
        navigation.push('PneumoniaList')
    }
    const pressHandler1 = () => {
        navigation.push('NonList')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Card style={{ flex: 1, backgroundColor: 'blue' }}>
                <Card.Title>PNEUMONIA LIST </Card.Title>
                <Card.Divider />
                <Image source={require('./../Images/pneumonia.gif')} style={styles.image} />
                <Button
                    buttonStyle={{ 
                        borderRadius: 0, 
                        marginLeft: 0, 
                        marginRight: 0, 
                        marginBottom: 0, 
                        width: 250, 
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#3EAB90',
                        borderRadius: 13,
                        borderColor: "white",
                        borderWidth: 2,  
                        fontFamily:"YuseiMagic-Regular",  
                    }}
                    title='VIEW NOW'
                    onPress={pressHandler} />
            </Card>

            <Card >
                <Card.Title>NON-PNEUMONIA LIST</Card.Title>
                <Card.Divider />
                <Image source={require('./../Images/Doc-1.gif')} style={styles.image} />
                <Button
                    buttonStyle={{ 
                        borderRadius: 0, 
                        marginLeft: 0, 
                        marginRight: 0, 
                        marginBottom: 0, 
                        width: 250, 
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#3EAB90',
                        borderRadius: 13,
                        borderColor: "white",
                        borderWidth: 2,  
                        fontFamily:"YuseiMagic-Regular",
                    }}
                    title='VIEW NOW'
                    fontFamily = "YuseiMagic-Regular"
                    onPress={pressHandler1} />
            </Card>
        </SafeAreaView>
    )
}

export default Doctor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        backgroundColor: '#CAE0DB',

    },
    list: {
        backgroundColor: 'pink',
        fontFamily:"YuseiMagic-Regular",
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        //fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
        resizeMode: "stretch",
        fontFamily:"YuseiMagic-Regular",

    },
    image: {
        height: 160,
        width: 200,
        backgroundColor: '#dae2f0',
        // position: 'absolute',
        margin: 20,
        marginBottom: 5,
        marginTop: 5,
        resizeMode: "cover",
    },
})
