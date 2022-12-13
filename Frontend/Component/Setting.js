import { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Dimensions, Image, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckAuth } from './lib/CheckAuth';


const {width : SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

 
 const Setting = ({setDisplay, setMode, logined}) => {
      const [me, setMe] = useContext(CheckAuth)
     useEffect(()=>{
          setDisplay(false);
     },[])
     
      return(
           <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                         setDisplay(true)
                         setMode('home')
                    }} style={{position:'absolute', top: 30, left: 10,}}>
                    <Ionicons name="chevron-back" size={40} color="snow" /></TouchableOpacity>
                    {me ?
                    
                    <Text>logined</Text> 
                    
                    :<Text>not logined</Text>}
          </View>
     )
}
export default Setting

const styles = StyleSheet.create({
     container:{
          flex: 1,
          alignItems : 'center',
          justifyContent : 'center',
          backgroundColor : 'gold',
          width : SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
        },
})