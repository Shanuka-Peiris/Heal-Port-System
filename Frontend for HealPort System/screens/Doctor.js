import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

const Doctor = ({ navigation }) => {
    const pressHandler = () => {
        navigation.push('PneumoniaList')
    }
    const pressHandler1 = () => {
        navigation.push('NonList')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Card style={{ flex: 1, backgroundColor: 'blue' }}>
                <Card.Title>PNEUMONIA LIST </Card.Title>
                <Card.Divider />
                <Image source={require('../Images/Doc-2.jpg')} style={styles.image} />
                <Button
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 250, backgroundColor: 'black', }}
                    title='VIEW NOW'
                    onPress={pressHandler} />
            </Card>

            <Card >
                <Card.Title>NON-PNEUMONIA LIST</Card.Title>
                <Card.Divider />
                <Image source={require('../Images/Doc-1.jpg')} style={styles.image} />
                <Button
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width: 250, backgroundColor: 'black', }}
                    title='VIEW NOW'
                    onPress={pressHandler1} />
            </Card>
        </SafeAreaView>
    )
}

export default Doctor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        backgroundColor: '#dae2f0',

    },
    list: {
        backgroundColor: 'pink'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
        resizeMode: "stretch",

    },
    image: {
        height: 165,
        width: 200,
        backgroundColor: '#dae2f0',
        // position: 'absolute',
        margin: 20,
        marginBottom: 5,
        marginTop: 5,
        resizeMode: "cover",
    },
})
