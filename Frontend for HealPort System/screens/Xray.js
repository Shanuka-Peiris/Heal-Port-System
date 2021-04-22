import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

const Xray = ({ navigation }) => {

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const askForPermission = async () => {
		const permissionResult = await Permissions.askAsync(Permissions.CAMERA)
		if (permissionResult.status !== 'granted') {
			Alert.alert('no permissions to access camera!', [{ text: 'ok' }])
			return false
		}
		return true
	}

	const takeImage = async () => {
		// make sure that we have the permission
		const hasPermission = await askForPermission()
		if (!hasPermission) {
			return
		} else {
			// launch the camera with the following settings
			let image = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [3, 3],
				quality: 1,
				base64: true,
			
			})

			// make sure a image was taken:
			if (!image.cancelled) {
				fetch("http://192.168.249.152:3000/upload", {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					// send our base64 string as POST request
					body: JSON.stringify({
						imgsource: image.base64,
					}),
				})
        .then ((response) => response.json())
        .then ((responseData) => {
          console.log(responseData)

          if (responseData.state == "PNEUMONIA") {
            console.log("yes")
          } else {
            console.log("No")
          }
        })
        .catch ((err) => {
          console.log(err)
        })
			}
		}
	}

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [3, 3],
				quality: 1,
				base64: true,
    });

    if (!result.cancelled) {
      fetch("http://192.168.249.152:3000/upload", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // send our base64 string as POST request
        body: JSON.stringify({
          imgsource: result.base64,
        }),
      })
      .then ((response) => response.json())
      .then ((responseData) => {
        console.log(responseData)

          if (responseData.state == "PNEUMONIA") {
            console.log("yes")
          } else {
            console.log("No")
          }
      })
      .catch ((err) => {
        console.log(err)
      })
    }
  };


  return (
    <View style={styles.Container}>
      <Image
        source={require('../Images/radiographer-4.png')}
        style={{ width: 350, height: 250, alignItems: 'center', justifyContent: 'center', bottom: 20, marginBottom: 30, marginTop: 20 }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress= {takeImage}
      >
        <Text style={styles.buttonText}>Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress = {pickImage}
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
