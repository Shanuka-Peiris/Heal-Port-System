import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image, ScrollView } from 'react-native';

const StaffMember = ({ navigation }) => {

  const pressHandler1 = () => {
    navigation.push('Doctor')
  }

  const pressHandler2 = () => {
    navigation.push('Radiographer')
  }

  const pressHandler3 = () => {
    navigation.push('Admission Officer')
  }

    return (
      <View style={styles.StaffMember}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://cesie.org/media/heal-logo.jpg',
            }}
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
});
