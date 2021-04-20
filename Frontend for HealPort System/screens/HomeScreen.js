import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

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
        <StatusBar style="light" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles.tinyLogo}
              source={require('../Images/heal-logo.png')}
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
    backgroundColor: '#CAE0DB',
  },
  tinyLogo: {
    width:250,
    height:250,
    marginBottom: 20,
    marginTop: 150,
    marginLeft:10,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    backgroundColor: '#3EAB90',
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 13,
    borderColor: "white",
    borderWidth: 2,
    width: 200,
    marginLeft: 32,
  },
  btntext: {
    color: 'white',
    fontSize: 25, 
    fontFamily:"YuseiMagic-Regular",
  },
});
