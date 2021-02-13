import React from 'react'
import { StyleSheet, Text, View , Button,TouchableOpacity} from 'react-native'

const Xray = ({ navigation }) => {
    const pressHandler1 = () => {
      navigation.push('Camera')
    }
    const pressHandler2 = () => {
        navigation.push('Gallery')
      }

    return (
      <View style={styles.Container}>

        <TouchableOpacity 
          style={styles.button} 
          onPress = { pressHandler1}
          >
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress = { pressHandler2}
          >
          <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>

      </View>
    )
}

export default Xray

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: '#eee9f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#6e6570',
    marginBottom: 50,
    borderRadius: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
})
