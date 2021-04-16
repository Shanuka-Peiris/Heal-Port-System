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
                    // source={{uri: 'https://cesie.org/media/heal-logo.jpg'}}
                    source={require('../Images/logo-3.png')}
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
        backgroundColor: '#79f2ca',
    },
    tinyLogo: {
        height: 200,
        width: 300,
        justifyContent: 'center',
    }
});
