import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Xray = ({ navigation }) => {
  const pressHandler1 = () => {
    navigation.push('CamaraNew')
  }
  const pressHandler2 = () => {
    navigation.push('Gallery')
  }


  return (
    <View style={styles.Container}>
      <Image
        source={require('../Images/radiographer-4.png')}
        style={{ width: 350, height: 250, alignItems: 'center', justifyContent: 'center', bottom: 20, marginBottom: 30, marginTop: 20 }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={pressHandler1}
      >
        <Text style={styles.buttonText}>Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={pressHandler2}
      >
        <Text style={styles.buttonText}>Gallery</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Xray

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#CAE0DB',
    alignItems: 'center',
    justifyContent: 'center',

    paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    backgroundColor: '#3EAB90',
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 13,
    borderColor: "white",
    borderWidth: 2,
    width: 200,
    height:60,
    marginLeft: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 25, 
    fontFamily:"YuseiMagic-Regular",
  },
  pic1: {
    height: 90,
    width: 90,
  },
})
