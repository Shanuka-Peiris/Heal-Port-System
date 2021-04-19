import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Xray = ({ navigation }) => {
  const pressHandler1 = () => {
    navigation.push('camaraNew')
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 12,
    // backgroundColor: '#6e6570',
    marginBottom: 50,
    borderRadius: 200,
    borderColor: '#456b82',
    borderWidth: 5,
  },
  buttonText: {
    color: '#456b82',
    fontSize: 26,
    fontWeight: '700',

  },
  pic1: {
    height: 90,
    width: 90,
  },
})
