import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import RegistrationScreen from './screens/PatientReg';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import LoginScreenHospital from './screens/LoginScreenHospital';
import LoginScreenPatient from './screens/LoginScreenPatient';
import PneumoniaList from './screens/PneumoniaList';
import NonPneumoniaList from './screens/NonPneumoniaList';
import CameraScreen from './screens/CameraScreen';
import GalleryScreen from './screens/GalleryScreen';
import Discharge from './screens/Discharge';
import CheckXray from './screens/CheckXray';
import PatientReg from './screens/PatientReg';
import HospitalReg from './screens/HospitalReg';
import StaffMember from './screens/StaffMember';
import Radiographer from './screens/Radiographer';
import Xray from './screens/Xray';
import PatientSymptoms from './screens/PatientSymptoms';
import Doctor from './screens/Doctor';
import AdmissionOfficer from './screens/AdmissionOfficer';
import CamaraScreenNew from './screens/Cameraaa';
import AdmissionOfficerScreen from './screens/AdmissionOfficerScreen'


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator > 

      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="On" 
        component={ OnBoardingScreen } 
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name="Home" 
        component={ HomeScreen } 
        options={{headerShown: false}} 
      />
      
      <Stack.Screen 
        name="Patient Login" 
        component={ LoginScreenPatient } 
        options={{headerShown: false, title: 'home'}} 
      />

      <Stack.Screen 
        name="Staff Login" 
        component={ LoginScreenHospital } 
        options={{headerShown: false}} 
      />

      <Stack.Screen 
        name="Patient Registration" 
        component={ PatientReg } 
        options={{headerShown: false}} 
      />

      <Stack.Screen 
        name="Symptoms" 
        component={PatientSymptoms} 
        options={{headerShown: false}} 
      />

      <Stack.Screen 
        name="Staff Registration" 
        component={ HospitalReg } 
        options={{headerShown: false}} 
      />

      <Stack.Screen 
        name="Staff" 
        component={ StaffMember } 
        options={{headerShown: false}} 
      />

      <Stack.Screen 
        name="Radiographer" 
        component={ Radiographer } 
        options={{headerShown: false}} 
      />

      <Stack.Screen 
        name="Doctor" 
        component={Doctor} 
        options={{headerShown: false}} 
      />

      <Stack.Screen 
        name="Admission Officer" 
        component={AdmissionOfficer} 
        options={{headerShown: false}} 
      />

      <Stack.Screen 
        name="X-ray" 
        component={ Xray } 
        options={{headerShown: false}} 
      />

        <Stack.Screen
          name="PneumoniaList"
          component={PneumoniaList}
          options={{headerShown: false}} 
        />

        <Stack.Screen
          name="NonList"
          component={NonPneumoniaList}
          options={{headerShown: false}} 
        />

        {/* <Stack.Screen
          name="Camera" component={CameraScreen}
          options={{ headerShown: false }} 
        /> */}

        <Stack.Screen
          name="CamaraNew" component={CamaraScreenNew}
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="Discharge"
          component={Discharge} 
          options={{headerShown: false}} 
        />

        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{headerShown: false}}  
        />

        <Stack.Screen
          name="check"
          component={CheckXray} 
          options={{headerShown: false}} 
        />

        <Stack.Screen
          name="Admission officer new"
          component={AdmissionOfficerScreen} 
          options={{headerShown: false}} 
        />


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