import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import RegistrationScreen from './screens/PatientReg';
import Splash from './screens/Splash';
import HomeScreen from './screens/HomeScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import LoginScreenHospital from './screens/LoginScreenHospital';
import LoginScreenPatient from './screens/LoginScreenPatient';
import PatientReg from './screens/PatientReg';
import HospitalReg from './screens/HospitalReg';
import StaffMember from './screens/StaffMember';
import Radiographer from './screens/Radiographer';
import Xray from './screens/Xray';
import Camera from './screens/Camera';
import PatientSymptoms from './screens/PatientSymptoms';
import Doctor from './screens/Doctor';
import AdmissionOfficer from './screens/AdmissionOfficer';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator > 

      <Stack.Screen name="Splash" component={Splash} />  
      <Stack.Screen name="On" 
      component={ OnBoardingScreen } 
      options={{headerShown: false}}
      />
      <Stack.Screen name="Home" 
      component={ HomeScreen } 
      options={{headerShown: false}} />
      
    
      <Stack.Screen name="Patient Login" component={ LoginScreenPatient } />
      <Stack.Screen name="Staff Login" component={ LoginScreenHospital } />
      <Stack.Screen name="Patient Registration" component={ PatientReg } />
      <Stack.Screen name="Symptoms" component={PatientSymptoms} />
      <Stack.Screen name="Staff Registration" component={ HospitalReg } />
      <Stack.Screen name="Staff" component={ StaffMember } />
      <Stack.Screen name="Radiographer" component={ Radiographer } />
      <Stack.Screen name="Doctor" component={Doctor} />
      <Stack.Screen name="Admission Officer" component={AdmissionOfficer} />
      <Stack.Screen name="X-ray" component={ Xray } />
      <Stack.Screen name="Camera" component={ Camera } />


      </Stack.Navigator>
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
