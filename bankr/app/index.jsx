import { Text, View, Image, TextInput,Dimensions, Pressable, Touchable, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {


  const {width , height} = Dimensions.get('screen')

  console.log('width :', width, " height : ", height)



  function myname(){

    console.log('This is from my normal function')

  }

  const arrow = ()=>{

     console.log('This is from my arrow function')


  }


  // arrow()

  // myname()

  return (
    <SafeAreaView style={{backgroundColor:'black', flex:1, paddingHorizontal:width*.04}}>

      <ScrollView>


      <Text style={{color:'red', fontSize:30, fontStyle:"italic"}}>My name is Micheal , and I am a Senior software Engineer.</Text>

      <Text style={{color:'green', fontSize:50}}>I am so excited for this class</Text>

      <Text style={{color:'blue', fontSize:70, fontStyle:'italic'}}>React native is so so exciting.</Text>


      <Image source={require('../assets/images/favicon.png')} />

      <TextInput style={{borderColor:'red', borderWidth:2, height:50, borderRadius:20, paddingLeft:20, marginTop: height*.05}}/>


      <Pressable onPress={()=>{

        console.log('my name is Adefolarin')

      }} style={{backgroundColor:'white', width:width*.3, marginTop:40, padding:30}}>
        <Text style={{color:'red'}}>Click me!</Text>
      </Pressable>

      <TouchableOpacity onPress={()=>{
        console.log('I love coding!!')

      }} style={{backgroundColor:'white', padding:40, width:150, marginTop:40}}>

        <Text style={{color:'blue'}}>Login</Text>

      </TouchableOpacity>

         <TouchableOpacity onPress={()=>{
        console.log('I love coding!!')

      }} style={{backgroundColor:'white', padding:40, width:150, marginTop:40}}>

        <Text style={{color:'blue'}}>Login</Text>

      </TouchableOpacity>

         <TouchableOpacity onPress={()=>{
        console.log('I love coding!!')

      }} style={{backgroundColor:'white', padding:40, width:150, marginTop:40}}>

        <Text style={{color:'blue'}}>Login</Text>

      </TouchableOpacity>

      

    <View>
      
    </View>


     </ScrollView>

    </SafeAreaView>

  );
}
