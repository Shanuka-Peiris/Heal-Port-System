import React from 'react';
import { StyleSheet, Text, View , Button,TouchableOpacity,FlatList,Image} from 'react-native';


const DATA = [
  
  {
    
    name: "Sumanapala Silva",
    nic: "19839292V",
    tel: '071-7474838'
  },  
  {
    
    name: "Somalatha Sumana ",
    nic: "19839292V",
    tel: '071-7474838'
  },
  {
    
    name: " nuwan nuwan ",
    nic: "19839292V",
    tel: '071-7474838'
  },
  {
    
    name: "sarath kumara ",
    nic: "19839292V",
    tel: '071-7474838'
  },
  {
    
    name: "rathnayake  ",
    nic: "19839392V",
    tel: '071-7474836'
  },
  {
    
    name: "Gunaya Appuhami ",
    nic: "19839392V",
    tel: '071-74748388337'
  },
  
  
];
const PneumoniaList = ({ navigation }) => {
  const pressHandler = () => {
    navigation.push('check')
  }
    return (
        <View style = {{flex:1 ,backgroundColor:'white'}}>

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
                  <Image source={require('../Images/AO-1.png')}  style = {styles.image} />
                  <Text style = {styles.name} >{item.name} </Text>
                  
                  <Text style = {styles.nic} > NIC - {item.nic} </Text>
                  <Text style = {styles.tel} > Contact - {item.tel} </Text>
                
                  <TouchableOpacity 
                    style={styles.button} onPress={pressHandler}>
                    <Text style={styles.buttonText} >X-ray</Text>
                  </TouchableOpacity>
                    
                </View>

              </TouchableOpacity>
            }}
          />
        </View>
    )
}

export default PneumoniaList

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: '#b4d8ed',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  cover:{
    height:100,
    width:'100%',
    marginBottom:20,
    
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
    top:60,
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
    bottom:25,
    left: 10,
  },
  name:{
    fontWeight: '700',
    fontSize:18,
    left:60,
  },
  num:{
    left:60,
  },
  nic:{
    left:60,
  },
  tel:{
    left:60,
  }
})
