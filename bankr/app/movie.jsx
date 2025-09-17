import { Text, ActivityIndicator, Alert, View, Image, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import axios from 'axios'

import { useEffect, useState } from "react";

    const url = 'https://imdb236.p.rapidapi.com/api/imdb/search?type=movie&genre=Drama&rows=25&sortOrder=ASC&sortField=id';

    // const options = {
    
	// method: 'GET',

	// headers: {
	// 	'x-rapidapi-key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
	// 	'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	// }

const MovieScreen = ()=>{


    const [isFetching , setIsFetching] = useState(false)

    const [moviesData , setMoviesData] = useState([])


    console.log(`The amount of items in my array is ${moviesData?.length}`)



    useEffect(()=>{

        // getMovies()

        getMoviesWithAxios()

    }, [])


    const getMovies = ()=>{

        try{

            setIsFetching(true)

            fetch(url , {
                method : 'GET',

                headers:{
                    'x-rapidapi-key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
		            'x-rapidapi-host': 'imdb236.p.rapidapi.com'

                }

            }).then((response)=>{ // converts response to json

               return response.json()

            }).then((data)=>{ // logs the formatted response 


                if(!data?.results){

                    if(data?.message.toLowerCase().includes('Exceeded'.toLowerCase())){

                        return Alert.alert('Message', 'You have exceeded your quote for the month , kindly subscribe!')

                    }

                }

                console.log(data)
                console.log(data.results)

                setMoviesData(data.results)

                Alert.alert('Success', "The api call was successful")

            }).catch((error)=>{

                console.log('error ', error )

                Alert.alert('Error', "The request was unsuccessful")


            })

        }
        catch(error){

            console.log('There was an error ', error)

        }
        finally{
            setIsFetching(false)
        }
      
    }


    // moviesData && 



    const getMoviesWithAxios = async ()=>{


        try{

            const response = await axios(url, {
                method:'GET',
               headers: {
		        'x-rapidapi-key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
    	        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	        }    
        })


            console.log(response);

        }

        catch(error){

            console.log(error)

        }
        finally{

        }








    }


    return(
        <SafeAreaView style={{paddingHorizontal:'10%', backgroundColor:'white', flex:1}}>

            <FlatList showsVerticalScrollIndicator={false} data={moviesData} renderItem={({item})=>{

                return(
                     <View>
                            <Image style={{height:100, width:100}} source={{uri:item.primaryImage}}/>
                            <Text style={{fontSize:20,marginBottom:5, fontWeight:'bold' }}>{item.primaryTitle}</Text>

                            <Text style={{fontSize:18}}>{item.description}</Text>


                        </View>
                )



            }}


            ListHeaderComponent={()=>{
                return(
                    <View style={{marginBottom:30}}>
                        <Text style={{color:'black', fontSize:50, textAlign:'center'}}>Movie Screen</Text>
                    </View>
                )
            }}


            ListFooterComponent={()=>{


                return(
                    <View style={{marginVertical:30}}>

                        {
                            moviesData?.length >= 1 && ( <Text style={{fontSize:30, textAlign:'center', color:'red'}}>This is the end of the List</Text>)

                        
                        }

                        

                    </View>
                )
            }}
        

            ListEmptyComponent={()=>{
                return(
                    <View>
                        <ActivityIndicator animating={isFetching} size={'large'} color={'red'}/>

                        {/* <Text style={{textAlign:'center'}}>The data is fetching....</Text> */}

                    </View>
                )

            }}


            style={{ paddingVertical:5, marginBottom:100}}

            contentContainerStyle={{backgroundColor:'white', marginBottom:40}}
            
            
            />


  


            {/* {
                moviesData?.map((data , index)=>{

                    return(
                        <View>
                            <Image style={{height:100, width:100}} source={{uri:data.primaryImage}}/>
                            <Text style={{fontSize:20,marginBottom:5, fontWeight:'bold' }}>{data.primaryTitle}</Text>

                            <Text style={{fontSize:18}}>{data.description}</Text>


                        </View>
                    )

                })
            }
 */}

   

                    


        </SafeAreaView>

    )
}


export default MovieScreen;