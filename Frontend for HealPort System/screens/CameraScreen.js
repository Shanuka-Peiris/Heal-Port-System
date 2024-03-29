import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Feather as Icon } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


const CameraScreen = ({ navigation }) => {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();


    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
      .then(() => {
        alert('Your photo was successfully saved in the gallery !')
      })
      .catch(error => {
        console.log('err', error);
      })
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.capture} onPress={takePicture}>
            <View style={styles.snapButton}>
              <View style={styles.innerButton} >
                <Icon name="camera" size={30} color="white" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>

      {capturedPhoto &&
        <Modal
          animationType='slide'
          transparent={false}
          visible={open}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 20,
              }}
              source={{ uri: capturedPhoto }}
            />
          </View>
          <View style={{ margin: 10, flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity style={{ marginRight: 60, alignSelf: 'center', }} onPress={() => setOpen(false)}>
              <Icon name="x-circle" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={{ margin: 10, alignSelf: 'center', }} onPress={() => savePicture(false)}>
              <Icon name="upload" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </Modal>
      }
    </View>
  );
}
export default CameraScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    paddingRight: 50,
  },
  capture: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  icon1: {
    alignSelf: 'auto',
    alignItems: 'baseline',

  },
  text: {
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 10,
    color: 'white',

  },
  snapButton: {
    width: 58,
    height: 56,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerButton: {
    backgroundColor: '#578e91',
    width: 52.8,
    height: 52,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',


  },
})
