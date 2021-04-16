import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView  } from 'react-native';

const PatientReg = ({ navigation }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [nic, setNic] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');

  const pressHandler = () => {
    navigation.push('Patient Login')
    } 
  
      return (
        <View style={styles.PatientReg}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.header}>REGISTRATION</Text>
  
            <TextInput
              style={styles.textInput}
              placeholder="First Name"
              placeholderTextColor="black"
              underlineColorAndroid={'black'}
              type="text"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Last Name"
              placeholderTextColor="black"
              underlineColorAndroid={'black'}
              type="text"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />

            <TextInput
              style={styles.textInput}
              placeholder="User Name"
              placeholderTextColor="black"
              underlineColorAndroid={'black'}
              type="text"
              value={userName}
              onChangeText={(text) => setUserName(text)}
            /> 
  
            <TextInput
              style={styles.textInput}
              placeholder="NIC"
              placeholderTextColor="black"
              underlineColorAndroid={'black'}
              type="text"
              value={nic}
              onChangeText={(text) => setNic(text)}
            />
  
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry={true}
              underlineColorAndroid={'black'}
              type="text"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <TextInput
              style={styles.textInput}
              keyboardType='numeric'
              placeholder="Contact No"
              placeholderTextColor="black"
              underlineColorAndroid={'black'}
              type="number"
              value={contactNo}
              onChangeText={(text) => setContactNo(text)}
            />
  
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
    backgroundColor: '#DFF8FB',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
    // paddingBottom: 5,
    marginBottom: 40,
    marginTop:35,
  },
  textInput: {
    height: 40,
    marginBottom: 30,
    color: 'black',
  },
  patientSignUp: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 6,
    backgroundColor: '#2CFBD1',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 3,
    width: 200,
    marginLeft: 60,
  },
  patientText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    fontWeight: 'bold'
  },
});
    

