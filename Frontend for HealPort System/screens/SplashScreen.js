import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

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
                source={{uri: 'https://cesie.org/media/heal-logo.jpg'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        
    }
});
