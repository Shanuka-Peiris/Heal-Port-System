import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Splash extends Component {
    static navigationOptions = {
        headerShown: 'false',

    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 1500)

    }

    render() {
        return (
            <View style={styles.Splash}>
                <Text style={styles.header}>Heal Port</Text>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    header: {
        fontSize: 70,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 250,
        marginTop: 180,
        fontWeight: 'bold',
        // paddingBottom: 5,
    },
    Splash: {
        flex: 1,
        justifyContent: 'center',
        // width: wp('70%'),
        // height: hp('80%'),
        // marginTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'blue',
    },
});
