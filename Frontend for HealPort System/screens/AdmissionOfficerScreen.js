import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image, ScrollView } from 'react-native';

const StaffMember = ({ navigation }) => {

  const pressHandler1 = () => {
    navigation.push('Admission Officer')
  }

  const pressHandler2 = () => {
    navigation.push('Discharge')
  }

    return (
      <View style={styles.StaffMember}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Image
            style={styles.tinyLogo}
            source={require('./../Images/A-Officer.png')}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress = { pressHandler1}
        >
            <Text style={styles.buttonText}>Admit Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress = { pressHandler2}
        >
            <Text style={styles.buttonText}>Discharge Patient</Text>
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
    backgroundColor: '#CAE0DB',
  },
  tinyLogo: {
    width: 390,
    height: 360,
    marginBottom: 20,
    marginTop: 80,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems:'stretch'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    backgroundColor: '#3EAB90',
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 13,
    borderColor: "white",
    borderWidth: 2,
    width: 250,
    height:60,
    marginLeft: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 25, 
    fontFamily:"YuseiMagic-Regular",
  },
});
