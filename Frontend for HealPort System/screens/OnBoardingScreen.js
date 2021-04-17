import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import OnBoarding from 'react-native-onboarding-swiper';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const fetchFont = () => {
  return Font.loadAsync({
    "Ledger-Regular" : require("../assets/fonts/Ledger-Regular.ttf"),
    "Sacramento" :  require("../assets/fonts/Sacramento-Regular.ttf"),

  });
};


const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);

const OnBoardingScreen = ({ navigation }) => {
    const [fontLoaded, setfontLoaded] = useState(false);

    if(!fontLoaded){
        return <AppLoading startAsync = {fetchFont} 
        onError = {() => console.log("ERROR")}
        onFinish = {() => {
            setfontLoaded(true);
        }}
        />;
    }

    return (
        <OnBoarding
            DoneButtonComponent={Done}
            onDone={() => navigation.navigate("Home")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image
                        source={require('../Images/OB-2.png')}
                        style={styles.pic1}
                    />,
                
                    title: <Text style = {styles.title}> Heal Port</Text>,
                    subtitle:<Text style = {styles.subtitle}>Discover Your Wellness</Text>,
                    
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image
                        source={require('../Images/BO-5.png')}
                        style={styles.pic2}
                    />,
                    title: <Text style = {styles.title}>Running to the Future</Text>,
                    subtitle: <Text style = {styles.subtitle}>A Better Way To Practice Care</Text>,
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image
                        source={require('../Images/OB-1.png')}
                        style={styles.pic3}
                    />,
                    title:<Text style = {styles.title}> Stay Strong, Live long</Text>,
                    subtitle:<Text style = {styles.subtitle}>Get Answers About Your Health</Text>,
                },
            ]}
        />
    );
};


export default OnBoardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Cochin"
    },
    pic1: {
        width:400,
        height: 400,
    },
    pic2: {
        width:500,
        height: 450,
    },
    pic3: {
        width:500,
        height: 400,
    },
    title:{
        fontSize:40,
        fontFamily:"Sacramento",
    },
    subtitle:{
        fontSize:16,
        fontFamily:"Ledger-Regular",
    }
})
