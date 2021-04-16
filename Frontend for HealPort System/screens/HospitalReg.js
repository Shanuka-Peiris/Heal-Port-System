import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView  } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const HospitalReg = ({ navigation }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [registrationNo, setRegistrationNo] = useState('');
  const [password, setPassword] = useState('');
  const [contactNo, setContactNo] = useState('');

  const pressHandler = () => {
    navigation.push('Staff Login')
  }

    return (
      <View style={styles.HospitalReg}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>REGISTRATION</Text>

          <View style={styles.container}>
             <Text>Select Your Profession</Text>
             <RNPickerSelect
                 placeholder={{ label: "Select your Profession" ,value: null}}
                 onValueChange={(value) => console.log(value)}
                 placeholderTextColor = "black"
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
            placeholderTextColor= "black"
            underlineColorAndroid={'black'} 
            type="text"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />

          <TextInput 
            style={styles.textInput}  
            placeholder="Last Name" 
            placeholderTextColor= "black"
            underlineColorAndroid={'black'}
            type="text"
            value={lastName}
            onChangeText={(text) => setLastName(text)} 
          />

          <TextInput 
            style={styles.textInput}  
            placeholder="User Name" 
            placeholderTextColor= "black"
            underlineColorAndroid={'black'} 
            type="text"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          /> 

          <TextInput 
            style={styles.textInput}  
            placeholder="Registration No" 
            placeholderTextColor= "black"
            underlineColorAndroid={'black'}
            type="text"
            value={registrationNo}
            onChangeText={(text) => setRegistrationNo(text)} 
          />

          <TextInput 
            style={styles.textInput}   
            placeholder="Password" 
            placeholderTextColor= "black" 
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
            placeholderTextColor= "black"
            underlineColorAndroid={'black'} 
            type="number"
            value={contactNo}
            onChangeText={(text) => setContactNo(text)}
          />

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
    backgroundColor: '#DFF8FB',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: 'black',
    marginBottom: 30,
    marginTop:20,
  },
  textInput: {
    // alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'black', 
  },
  staffSignUp: {
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
  staffText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    fontWeight: 'bold'
  },
});
