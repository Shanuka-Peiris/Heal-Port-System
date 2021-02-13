import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

const Doctor = ({ navigation }) => {

    return (
        <View style={styles.Container}>
            <Text>Search</Text>
        </View>
    )
} 

export default Doctor

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#eee9f0',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,

    },
})
