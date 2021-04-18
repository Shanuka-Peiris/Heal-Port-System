import React from 'react';
import { StyleSheet, Text, View , Button,TouchableOpacity,FlatList,Image} from 'react-native';

const DATA = [
  
  {
    id: "S-145723",
    name: "Sumanapala Silva",
  },  
  {
    id: "S-8726563",
    name: "Somalatha Sumana ",
  },
  {
    id: "S-586945",
    name: "Appuhamige Appuhami ",
  },
  {
    id: "S-536945",
    name: "Appuhamioge Appuhami ",
  },
  {
    id: "S-576945",
    name: "Gunaya Appuhami ",
  },
  {
    id: "S-588945",
    name: "Malagala Appuhami ",
  },
];
const Radiographer = ({ navigation }) => {
  const pressHandler = () => {
    fetch('http://10.0.2.2:3000/retrieve/information/all', {
        method: 'get',
    })
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData)
    })
    .catch((error) => {
        console.log(error)
        Alert.alert("Something went wrong. Please try again!")
    })
  pressHandler()
  
  }
    return (
        <View style = {{flex:1 ,backgroundColor:'white'}}>
           <Image 
                source={require('../Images/radiographer-2.gif')}
                style={{ width: 400, height: 250 ,alignItems: 'center',justifyContent: 'center', marginTop:10,}}
            /> 
          <FlatList
            data = {DATA}
            keyExtractor={item => item.name }
            renderItem={({item}) => {
              return <TouchableOpacity style = {{margin:10, margin:20}}>
                <View style = {{flex:1 , padding: 10}}>
              
                  <View 
                    style = {[
                      StyleSheet.absoluteFillObject,
                      {backgroundColor:'#b4d8ed', borderRadius:16,}
                    ]}/>
                  <Image source={require('../Images/Radiographer.png')}  style = {styles.image} />
                  <Text style = {styles.name} > {item.name} </Text>
                  <Text style = {styles.num} > Reg Number - {item.id} </Text>
                
                  <TouchableOpacity 
                    style={styles.button}>
                    <Text style={styles.buttonText} >Upload</Text>
                  </TouchableOpacity>
                    
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
    backgroundColor: '#b4d8ed',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 6,
    backgroundColor: '#456b82',
    width:100,
    marginBottom: 80,
    borderRadius: 200,
    position: 'absolute',
    top:35,
    right: 10,
    borderColor:'white',
    borderWidth:2,
  },
  buttonText: {
    color: 'white',
    fontSize: 20, 
    fontWeight: '700',   
  },
  pic1:{
    width:100,
    height:100,
  },
  image:{
    height:50,
    width:50,
    position: 'absolute',
    bottom:9,
    left: 10,
  },
  name:{
    fontWeight: '700',
    fontSize:18,
    left:60,
  },
  num:{
    left:60,
  }
  
})
