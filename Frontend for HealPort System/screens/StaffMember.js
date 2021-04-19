import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, ScrollView } from 'react-native';

const StaffMember = ({ route, navigation }) => {

  console.log(route.params.paramKey)

  const pressHandler1 = () => {
    navigation.replace('Doctor')
  }

  const pressHandler2 = () => {
    navigation.replace('Radiographer')
  }

  const pressHandler3 = () => {
    navigation.replace('Admission Officer')
  } 

    return (
      <View style={styles.StaffMember}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Image
            style={styles.tinyLogo}
            // source={{
            //   uri: 'https://cesie.org/media/heal-logo.jpg',
            // }}
            source={require('../Images/logo-3.png')}

            style={{ width: 350, height: 200, marginBottom: 100 }}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress = { pressHandler1}
        >
            <Text style={styles.buttonText}>Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress = { pressHandler2}
        >
            <Text style={styles.buttonText}>Radiographer</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress = { pressHandler3}
        >
            <Text style={styles.buttonText}>Admission Officer</Text>
        </TouchableOpacity>

        </ScrollView>
      </View>
    );
}

export default StaffMember

const styles = StyleSheet.create({
  StaffMember: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
  },
  tinyLogo: {
    width: 340,
    height: 200,
    marginBottom: 30,
    marginTop: 50,
    paddingBottom: 5,
    justifyContent: 'center',
  },
  button: {
    width: 300,
    marginTop: 30,
    textAlign: "center",
    borderRadius: 10,
    padding: 8,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: '#2CFBD1',
    marginLeft: 15
  },
  buttonText: {
    color: 'black',
    fontSize: 25,  
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
