import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

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
                    style={styles.tinyLogo}
                    source={require('../Images/logo-4.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    }
});
