import React from 'react'
import { StyleSheet, Text, View , Button,TouchableOpacity,FlatList,Image} from 'react-native'


const Radiographer = ({ navigation }) => {

    const pressHandler = () => {
      navigation.push('X-ray')
    }
    
    
    return (
        <View style={styles.Container}>
            
            <TouchableOpacity 
              style={styles.button} 
              onPress = { pressHandler}
            >
              <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>

        </View>
        
    )
}

export default Radiographer

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
  pic1:{
    width:100,
    height:100,
  },
  image:{
    height:50,
    width:50,
  },

})
