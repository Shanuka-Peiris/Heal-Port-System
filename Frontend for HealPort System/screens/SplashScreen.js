import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
<<<<<<< HEAD
=======
import SplashScreen from 'react-native-splash-screen';
>>>>>>> Frontend-development-Chandu

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('On');
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
<<<<<<< HEAD
                style={styles.tinyLogo}
                source={{uri: 'https://cesie.org/media/heal-logo.jpg'}}
=======
                    style={styles.tinyLogo}
                    source={require('../Images/logo-4.png')}
>>>>>>> Frontend-development-Chandu
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    container:{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'white',
    },
    tinyLogo:{
        height:200,
        width:300,
        
=======
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'white',
        
    },
    tinyLogo: {
        height: 250,
        width: 300,
        justifyContent: 'center',
        alignItems: "center",
        position: 'absolute'
>>>>>>> Frontend-development-Chandu
    }
});
