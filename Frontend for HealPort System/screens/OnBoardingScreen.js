import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import OnBoarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
            {...props}
            >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnBoardingScreen = ({ navigation }) => {
    return (
        <OnBoarding
            DoneButtonComponent = {Done}
            OnSkip={() => navigation.replace("Home")}
            onDone={() => navigation.navigate("Home")}
                pages={[
                    {
                        backgroundColor: '#a6e4d0',
                        image: <Image 
                                    source={require('../Images/onBoard-4.jpg')} 
                                    style = {styles.pic1}
                                />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',   
                    },
                    {
                        backgroundColor: '#fdeb93',
                        image: <Image 
                                    source={require('../Images/onBoard-2.jpg')} 
                                    style = {styles.pic1}
                                />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',   
                    },
                    {
                        backgroundColor: '#e9bcbe',
                        image: <Image 
                                    source={require('../Images/onBoard-3.jpg')} 
                                    style = {styles.pic1}
                                />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',   
                    },
                ]}
        />
    );
};


export default OnBoardingScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        fontFamily: "Cochin"   
    },
    pic1:{
        width:200,
        height:200,
    },
})
