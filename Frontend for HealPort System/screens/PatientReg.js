import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert,Image  } from 'react-native';
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

const PatientReg = ({ navigation }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [nic, setNic] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
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
      fetch('http://10.0.2.2:3000/patient/signUp', {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "firstName":firstName,
            "lastName":lastName,
            "userName":userName,
            "nicNumber":nic,
            "password":password,
            "contactNumber":contactNo
        })
      })
      .then(res => res.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem('token',data.token)
          navigation.replace('Patient Login')
        } catch (e) {
          Alert.alert("Required fields are not filed...")
          console.log("Error", e)
        }
      })
    }

  // const handleValidContact = (val) => {
  //     if ( val.length == 10) {
  //       setContactNo({
  //         ...contactNo,
  //         isValidContact: true
  //       });
  //     } else {
  //       setContactNo({
  //         ...contactNo,
  //         isValidContact: false
  //       });
  //     }
  // }
  
      return (
        <View style={styles.PatientReg}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Image 
                    source={require('../Images/reg-2.png')}
                    style={{ width: 300, height: 160,marginLeft:15,marginTop:80}}                
              />
              <Text style={styles.header}>REGISTRATION</Text>    
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="First Name"
              underlineColorAndroid={'black'}
              placeholderTextColor= '#4d4d4d'
              type="text"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Last Name"
              underlineColorAndroid={'black'}
              placeholderTextColor= '#4d4d4d'
              type="text"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />

            <TextInput
              style={styles.textInput}
              placeholder="User Name"
              underlineColorAndroid={'black'}
              placeholderTextColor= '#4d4d4d'
              type="text"
              value={userName}
              onChangeText={(text) => setUserName(text)}
            /> 

            <TextInput
              style={styles.textInput}
              keyboardType='numeric'
              placeholder="Contact No"
              underlineColorAndroid={'black'}
              placeholderTextColor= '#4d4d4d'
              type="number"
              onChangeText={(val) => setContactNo(val)}
              // onEndEditing = {(e) => handleValidContact(e.nativeEvent.text)}
            />
  
            <TextInput
              style={styles.textInput}
              placeholder="NIC"
              underlineColorAndroid={'black'}
              placeholderTextColor= '#4d4d4d'
              type="text"
              value={nic}
              onChangeText={(text) => setNic(text)}
            />
  
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid={'black'}
              placeholderTextColor= '#4d4d4d'
              type="text"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            {/* { contactNo.isValidContact ? null:
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style = {styles.errorMsg}>Contact number should have 10 digits.</Text>
              </Animatable.View>
            } */}
  

            <TouchableOpacity style={styles.patientSignUp}>
                <Text style={styles.patientText} onPress={pressHandler}>Sign up</Text>
            </TouchableOpacity>
  
          </ScrollView>
        </View>
      );
  }

export default PatientReg

const styles = StyleSheet.create({
  PatientReg: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#CAE0DB',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
    marginBottom: 40,
    color: "#004644",
    fontFamily:"YuseiMagic-Regular",
  },
  textInput: {
    height: 40,
    marginBottom: 3,
    marginTop: 22,
    color: 'black',
    fontSize: 18,
    fontFamily:"YuseiMagic-Regular",
  },
  patientSignUp: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    marginTop: 50,
    marginBottom: 10,
    borderWidth: 2,
    width: 200,
    marginLeft:75,
    textAlign: "center",
    borderRadius: 13,
    borderColor: "white",
    backgroundColor: '#3EAB90',
  },
  patientText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25, 
    fontFamily:"YuseiMagic-Regular",
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
    

