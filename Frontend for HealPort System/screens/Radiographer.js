import React from 'react'
import { StyleSheet, Text, View , Button,TouchableOpacity,FlatList,Image} from 'react-native'

const DATA = [
  {
    id: "S-145723",
    name: "Sumanapala Silva",
    image:'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg'
  },
  {
    id: "S-8726563",
    name: "Somalatha Sumana ",
    image: <Image 
    source={require('../Images/onBoard-2.jpg')} />
  },
  {
    id: "S-586945",
    name: "Appuhamige Appuhami ",
    image:'../Images/onBoard-3.jpg'
  },
];
const Radiographer = ({ navigation }) => {

    // const pressHandler = () => {
    //   navigation.push('X-ray')
    // }
    
    
    return (
        // <View style={styles.Container}>
        //     {/* <Image 
        //         source={{
        //             uri: 'https://www.flaticon.com/svg/vstatic/svg/706/706134.svg?token=exp=1613156916~hmac=e48e2543af492cd1e155e8354578a52e', 
        //         }}
        //         style={{ width: 300, height: 200 }}
        //     /> */}

        //     <TouchableOpacity 
        //       style={styles.button} 
        //       onPress = { pressHandler}
        //     >
        //       <Text style={styles.buttonText}>Upload</Text>
        //   </TouchableOpacity>

        // </View>
        <View style = {{flex:1}}>
          <FlatList
            data = {DATA}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return <TouchableOpacity onPress= {() => {}}>
                <View style = {{flex:1 , padding: 10  }}>
              
                  <View style = {styles.bg}/>
                  
                  <Text> Name - {item.name} </Text>
                  <Text> Reg Number - {item.id} </Text>
                  <Image source={{uri:item.image}} style = {styles.image} />
                </View>

              </TouchableOpacity>
            }}
          />

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
