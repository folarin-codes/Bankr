import { Text, View, Image, TextInput,Dimensions, Pressable, Touchable, TouchableOpacity, TouchableWithoutFeedback, ScrollView , Alert, Platform, StyleSheet} from "react-native";

import { useState, useEffect } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../components/button";

import { router } from "expo-router";

export default function Index() {





  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('')
  const [email , setMail] = useState('')
  const [password , setPassword] = useState('')
  const [passwordVisble, setPasswordVisible] = useState(false)

  // useEffect(effect , dependeies)

  // useEffect(()=>{} , [])


  useEffect(()=>{

    console.log('This was fired from the useEffcet hook')



  }, [firstName, lastName])







  // console.log(`first name : ${firstName}, last name : ${lastName}`)


  // useState() ---> returns data and function that updates the data
  
  
  // function useState(){

  // return [data , setterFunction]


  //}







  // HOOKS //



  const {width , height} = Dimensions.get('screen')

  // console.log('width :', width, " height : ", height)



  function greetBasedOnDevice(){


    // Platform.OS === "ios" ? Alert.alert('hello', "Hello Ios") : Alert.alert('Hello',"Hello Android")


    // if(Platform.OS == 'android'){
    //   Alert.alert("Android", "This is an android device")
    // }

    // else if(Platform.OS == 'ios'){
    //    Alert.alert("IOS", "This is an ios device")

    // }

    // else{
    //   Alert.alert(`${Platform.OS}`, `This is an ${Platform.OS} device`)
    // }

    Alert.alert(`${Platform.OS}`, `This is a ${2 + 4} device`)



  }




  function myname(){

    console.log('This is from my normal function')

  }

  const arrow = ()=>{

     console.log('This is from my arrow function')


  }


  // arrow()

  // myname()

  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1, paddingHorizontal:width*.04}}>


      <Text style={{fontWeight:'bold', fontSize:24, textAlign:'center', marginVertical:30}}>Resuable Components</Text>


      <View style={styles.container}>
        <Text style={styles.label}>First name</Text>


      <TextInput keyboardType="default"  style={styles.input} onChangeText={(text)=>{


          // console.log(text)

          setFirstName(text)


      }}/>

      </View>



      <View style={styles.container}>
        <Text style={styles.label}>Last name</Text>

        <TextInput  style={styles.input} onChangeText={(text)=>{

          // console.log(text)

          setLastName(text)

        }} />

      </View>



      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>


      <TextInput keyboardType="email-address"  style={styles.input} onChangeText={(mail)=>{
        setMail(mail)
      }}/>

      </View>



      <View style={styles.container}>
        <Text style={styles.label}>Password</Text>


      <TextInput secureTextEntry={!passwordVisble} style={styles.input} onChangeText={(password)=>{
        setPassword(password)
      }}/>

      <TouchableOpacity onPress={()=>{

        setPasswordVisible(!passwordVisble)


      }} style={{backgroundColor:'white', position:'absolute', top:45, right:25, padding:2}}>
        <Text style={{color:'black'}}>{passwordVisble ? 'Hide me' : 'Show me'}</Text>
      </TouchableOpacity>

      </View>


      <View>

        <Button onPress={()=>{

          router.push('./profile')
       

        }} buttonStyle={{backgroundColor:'red', borderColor:'green', borderWidth:10}} text={'Sign In'}/>

        <Button onPress={()=> {
          console.log('I was pressed')
        }} buttonStyle={{backgroundColor:'green'}} text={'Login'}/>

        <Button onPress={()=>{
          router.push('./movie')
        }} text={'Route to Movie screen'}/>

      </View>



      {/* <ScrollView>


      <Text style={{color:'red', fontSize:30, fontStyle:"italic"}}>My name is Micheal , and I am a Senior software Engineer.</Text>

      <Text style={{color:'green', fontSize:50}}>I am so excited for this class</Text>

      <Text style={{color:'blue', fontSize:70, fontStyle:'italic'}}>React native is so so exciting.</Text>


      <Image source={require('../assets/images/favicon.png')} />

      <TextInput style={{borderColor:'red', borderWidth:2, height:50, borderRadius:20, paddingLeft:20, marginTop: height*.05}}/>


      <Pressable onPress={()=>{

        console.log('my name is Adefolarin')
        Alert.alert("Error", 'There was an error!')

      }} style={{backgroundColor:'white', width:width*.3, marginTop:40, padding:30}}>
        <Text style={{color:'red'}}>Click me!</Text>
      </Pressable>

      <TouchableOpacity onPress={()=>{
        console.log('I love coding!!')
        Alert.alert('Success', 'I was clicked successfully!')

      }} style={{backgroundColor:'white', padding:40, width:150, marginTop:40}}>

        <Text style={{color:'blue'}}>Login</Text>

      </TouchableOpacity>

         <TouchableOpacity onPress={()=>{
        console.log('I love coding!!')

      }} style={{backgroundColor:'white', padding:40, width:150, marginTop:40}}>

        <Text style={{color:'blue'}}>Login</Text>

      </TouchableOpacity>

         <TouchableOpacity onPress={greetBasedOnDevice} style={{backgroundColor:'white', padding:40, width:150, marginTop:40}}>

        <Text style={{color:'blue'}}>Login 33</Text>

      </TouchableOpacity>

      

    <View>
      
    </View>


     </ScrollView> */}

    </SafeAreaView>

  );
}



const styles = StyleSheet.create({

  label : {
    fontSize:16,
    marginBottom:10,
    color:'black'

  },
  input:{backgroundColor:'black', borderRadius:25, height:50, padding:10, color:'white'},

  container:{
    marginBottom:20

  }


})