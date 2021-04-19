import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const fetchFont = () => {
  return Font.loadAsync({
    "Ledger-Regular" : require("../assets/fonts/Ledger-Regular.ttf"),
    "YuseiMagic-Regular" :  require("../assets/fonts/YuseiMagic-Regular.ttf"),
    "Vidaloka-Regular" :  require("../assets/fonts/Vidaloka-Regular.ttf"),



  });
};


const HomeScreen = ({ navigation }) => {
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
    navigation.push('Patient Login')
  }

  const pressHandler = () => {
    navigation.push('Staff Login')
  }

    return (
      <View style={styles.Home}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.tinyLogo}
            source={require('../Images/logo-5.png')}
        />

        <TouchableOpacity style={styles.button} onPress = { pressHandler1}>
            <Text style={styles.btntext}>Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = { pressHandler}>
            <Text style={styles.btntext}>Staff</Text>
        </TouchableOpacity>

        </ScrollView>
      </View>
    );
}
export default HomeScreen

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#e6fcf8',
  },
  tinyLogo: {
    width: 340,
    height: 250,
    marginBottom: 50,
    marginTop: 100,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  button: {
    //alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
      backgroundColor: '#33beff',
    //  backgroundColor: 'black',
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 30,
   
    borderColor: "#02142b",
    borderWidth: 3,
    width: 200,
    marginLeft: 67,
  },
  btntext: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 25, 
    fontFamily:"YuseiMagic-Regular",
    color:"#02142b",
  },
});
