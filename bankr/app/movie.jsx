import { Text, ActivityIndicator, Alert, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

import { useEffect, useState } from "react";

    const url = 'https://imdb236.p.rapidapi.com/api/imdb/search?type=movie&genre=Drama&rows=25&sortOrder=ASC&sortField=id';

    // const options = {
    
	// method: 'GET',

	// headers: {
		// 'x-rapidapi-key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
		// 'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	// }

const MovieScreen = ()=>{


    const [isFetching , setIsFetching] = useState(false)
    const [moviesData , setMoviesData] = useState(null)



    useEffect(()=>{

        getMovies()

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

                console.log('This is my data in json format ', data.results[0])

                setMoviesData(data.results)

                // Alert.alert('Success', "The api call was successful")

            }).catch((error)=>{

                console.log('error ', error )

                Alert.alert('Erroe', "The request was unsuccessful")


            })



        }
        catch(error){

            console.log('There was an error ', error)

        }
        finally{
            setIsFetching(false)
        }
      
    }


    return(
        <SafeAreaView style={{paddingHorizontal:'10%'}}>

            <ScrollView>

   


            <Text style={{color:'black', fontSize:50, textAlign:'center'}}>Movie screen


            </Text>


            <View style={{marginTop:70}}>

            <ActivityIndicator animating={isFetching} size={'large'} color={'red'}/>

            </View>


            {
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

                     </ScrollView>


        </SafeAreaView>

    )
}


export default MovieScreen;