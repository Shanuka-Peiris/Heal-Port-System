import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView,Image  } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';


const fetchFont = () => {
  return Font.loadAsync({
    "Ledger-Regular" : require("../assets/fonts/Ledger-Regular.ttf"),
    "Sacramento" :  require("../assets/fonts/Sacramento-Regular.ttf"),
    "Vidaloka-Regular" :  require("../assets/fonts/Vidaloka-Regular.ttf"),
    "YuseiMagic-Regular" :  require("../assets/fonts/YuseiMagic-Regular.ttf"),


  });
};

const HospitalReg = ({ navigation }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [registrationNo, setRegistrationNo] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState({
    isValidContact: true,
  });
  const [fontLoaded, setfontLoaded] = useState(false);
  const [ stafftype, setStaffType ] = useState('');
  
    if(!fontLoaded){
        return <AppLoading startAsync = {fetchFont} 
        onError = {() => console.log("ERROR")}
        onFinish = {() => {
            setfontLoaded(true);
        }}
        />;
    }

  const pressHandler = () => {
    console.log(stafftype)
    fetch('http://192.168.249.152:3000/staff/signUp', {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "firstName":firstName,
                "lastName":lastName,
                "userName":userName,
                "registrationNum":registrationNo,
                "password":password,
                "contactNumber":contactNo
            })
        })
        .then(res => res.json())
        .then(async (data) => {
          try {
            await AsyncStorage.setItem('token',data.token)
            navigation.push('Staff Login')
          } catch (e) {
            console.log("Error", e)
          }
        })
  }

  const handleValidContact = (val) => {
    if (val.length == 10) {
      setContactNo({
        ...contactNo,
        isValidContact: true
      });
    } else {
      setContactNo({
        ...contactNo,
        isValidContact: false
      });
    }
  }

    return (
      <View style={styles.HospitalReg}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
              <Image 
                    source={require('../Images/reg-2.png')}
                    style={{ width: 300, height: 160,marginLeft:15,marginTop:80}}                
              />
              <Text style={styles.header}>REGISTRATION</Text>    
            </View>

          <View style={styles.container}>
             <Text style={styles.profession}>Select Your Profession</Text>
             <RNPickerSelect
             style={styles.label}
                 placeholder={{ label: "Select your Profession" ,value: null, color:'red'}}
                 placeholderTextColor="red"
                 onValueChange={(value) => 
                  setStaffType(value)}
                 
                 items={[
                     { label: "Doctor", value: "Doctor" },
                     { label: "Radiographer", value: "Radiographer" },
                     { label: "Admission Officer", value: "Admission Officer" },
                     
                 ]}
             />
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
            placeholder="Registration No" 
            underlineColorAndroid={'black'}
            placeholderTextColor= '#4d4d4d'
            type="text"
            value={registrationNo}
            onChangeText={(text) => setRegistrationNo(text)} 
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

          <TextInput 
            style={styles.textInput} 
            keyboardType='numeric'  
            placeholder="Contact No" 
            underlineColorAndroid={'black'} 
            placeholderTextColor= '#4d4d4d'
            type="number"
            onChangeText={(text) => setContactNo(text)}
            onEndEditing={(e) => handleValidContact(e.nativeEvent.text)}
          />

          {contactNo.isValidContact ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Contact number should have 10 digits.</Text>
            </Animatable.View>
          }

          <TouchableOpacity style={styles.staffSignUp}>
              <Text style={styles.staffText} onPress={pressHandler}>Sign up</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
}
 
export default HospitalReg

const styles = StyleSheet.create({
  HospitalReg: {
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
    marginBottom: 2,
    marginTop: 20,
    color: 'black',
    fontSize: 18,
    fontFamily:"YuseiMagic-Regular",
  },
  profession:{
    height: 40,
    marginBottom: 30,
    color: 'black',
    fontSize: 18,
    fontFamily:"YuseiMagic-Regular",
  },
  staffSignUp: {
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
  staffText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25, 
    fontFamily:"YuseiMagic-Regular",
  },
  label:{
    marginVertical:20,
    fontSize:18,
    color:'red',
    fontFamily:"YuseiMagic-Regular",
    backgroundColor:'black'
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
