import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Quiz from './quiz'

const Result = ({navigation}) => {
  return (
    <View>
      <View>
          <Text>User Inputs</Text>
      </View>
      <View>
        
      </View>

      <View>
      <TouchableOpacity onPress={()=>{}}>
         <Text>Home</Text>
     </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  banner:{
    height:300,
    width:300,
},
bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
},
container:{
  paddingTop:40,
  paddingHorizontal:20,
  container:'100%'
}
})