import React from 'react';
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
import Cameraaa from './screens/Cameraaa'


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
      />

      <Stack.Screen 
        name="Staff Login" 
        component={ LoginScreenHospital } 
      />

      <Stack.Screen 
        name="Patient Registration" 
        component={ PatientReg } 
      />

      <Stack.Screen 
        name="Symptoms" 
        component={PatientSymptoms} 
      />

      <Stack.Screen 
        name="Staff Registration" 
        component={ HospitalReg } 
      />

      <Stack.Screen 
        name="Staff" 
        component={ StaffMember } 
      />

      <Stack.Screen 
        name="Radiographer" 
        component={ Radiographer } 
      />

      <Stack.Screen 
        name="Doctor" 
        component={Doctor} 
      />

      <Stack.Screen 
        name="Admission Officer" 
        component={AdmissionOfficer} 
      />

      <Stack.Screen 
        name="X-ray" 
        component={ Xray } 
      />

        <Stack.Screen
          name="PneumoniaList"
          component={PneumoniaList}
        />

        <Stack.Screen
          name="NonList"
          component={NonPneumoniaList}
        />

        <Stack.Screen
          name="Camera" component={CameraScreen}
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name ="camaraNew" component = {Cameraaa}
        />

        <Stack.Screen
          name="Discharge"
          component={Discharge} 
        />

        <Stack.Screen
          name="Gallery"
          component={GalleryScreen} 
        />

        <Stack.Screen
          name="check"
          component={CheckXray} 
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


