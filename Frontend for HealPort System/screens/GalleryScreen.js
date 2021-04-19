import React from 'react';
<<<<<<< HEAD
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
=======
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
>>>>>>> Frontend-development-Chandu
import * as ImagePicker from 'expo-image-picker';
import{Feather as Icon } from '@expo/vector-icons';

const GalleryScreen = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);
    
    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      }
  
<<<<<<< HEAD
      setSelectedImage({ Location: pickerResult.uri });
    };

    var myJson = JSON.stringify(selectedImage)
    // console.log(myJson)

    const submitImage = () => {
      console.log(myJson)
      // navigation.push('Admission Officer')
      fetch('http://10.0.2.2:3000/upload', {
          method: 'Post',
          headers: {
              'Content-Type': 'application/json',
          },
          body :JSON.stringify({
              selectedImage
          }) 
      })
      .then((response) => response.json())
      .then((responseData) => {
          console.log(responseData)
      })
      .catch((error) => {
          console.log(error)
          Alert.alert("Something went wrong. Please try again!")
      })
  }
=======
      setSelectedImage({ localUri: pickerResult.uri });
    };
>>>>>>> Frontend-development-Chandu
    
    if (selectedImage !== null) {
      return (
        <View style={styles.ImageSelect}>
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
          />
          <View style = {styles.GalleryBtn}>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
              <Icon name ="repeat" size ={30} color= "#578e91" />
              <Text style={styles.buttonText}>Again</Text>
            </TouchableOpacity>
<<<<<<< HEAD
            <TouchableOpacity onPress={ submitImage } style={styles.button}>
=======
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
>>>>>>> Frontend-development-Chandu
              <Icon name ="upload" size ={30} color= "#578e91" />
              <Text style={styles.buttonText}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={{uri: 'https://cdn.dribbble.com/users/4846149/screenshots/9987507/media/cc997a6e31afeb828c0345319359db39.gif'}}
        />
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button1}>
          <Text style={styles.buttonText}>Upload X-Ray</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default GalleryScreen  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        backgroundColor: 'white', 
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 12,
        marginTop:30,
        width:150,
        marginRight:10,
        height: 90,
        marginBottom: 50,
        borderRadius: 200,
        flexDirection: 'column'
    },
    button1: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 12,
      marginTop:30,
      height: 70,
      marginBottom: 50,
      borderRadius: 30 ,
      borderColor:'#578e91',
      borderWidth:3,
      flexDirection: 'column'
    },
    buttonText:{
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 23,
      color:'#578e91',
      fontWeight:'bold'
    },
    thumbnail: {
      width: '100%',
      height: 300,
      resizeMode: "contain",
      paddingTop: 30,
      marginTop: 50,
    },
    tinyLogo:{
      width: 400,
      height: 400,
      padding:20,
    },
    ImageSelect:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
        paddingTop:20,
        backgroundColor: 'black',
        flexDirection: 'column'
    },  
    GalleryBtn:{
      flexDirection: 'row',
      paddingTop:20,
    }
});