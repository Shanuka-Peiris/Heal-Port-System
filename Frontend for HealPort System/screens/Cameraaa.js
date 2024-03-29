import React,{ useState}  from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
// import { Camera } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';

const Cameraaa= ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState(null);

	const askForPermission = async () => {
		const permissionResult = await Permissions.askAsync(Permissions.CAMERA)
		if (permissionResult.status !== 'granted') {
			Alert.alert('no permissions to access camera!', [{ text: 'ok' }])
			return false
		}
		return true
	}

	takeImage = async () => {
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
				fetch("http://192.168.8.112:3000/upload", {
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
			}
		}
	}
	return (
		<View style={styles.container}>
			<Button title="Take a foto" onPress={takeImage} />
		</View>
	)
}
export default Cameraaa

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})