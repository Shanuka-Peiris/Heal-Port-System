import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  const pressHandler1 = () => {
    navigation.push('Patient Login')
  }

  const pressHandler = () => {
    navigation.push('Staff Login')
  }

    return (
      <View style={styles.Home}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://cesie.org/media/heal-logo.jpg',
          }}
        />

        <TouchableOpacity style={styles.button} onPress = { pressHandler1}>
            <Text style={styles.btntext}>Patient Login </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress = { pressHandler}>
            <Text style={styles.btntext}>Staff Login</Text>
        </TouchableOpacity>

        </ScrollView>
      </View>
    );
}
export default HomeScreen

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: 340,
    height: 200,
    marginBottom: 100,
    marginTop: 50,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#6e6570',
    marginTop: 10,
    marginBottom: 50,
    borderRadius: 200,
  },
  btntext: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 25, 
  },
});
