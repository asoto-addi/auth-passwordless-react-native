import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import Auth from './Auth'

const App = () => {
  return (
<View>
      <View style={styles.containerMain}>
  
      <Text style={styles.textMain}>Buy now and pay later with Addi</Text>
  
    </View>
      <View style={styles.container}>
  
  
        <Image
          style={styles.logo}
          source={{
            uri: 'https://global-uploads.webflow.com/58c5b8748712539d1de79645/5f21d512b047f87f62607cfb_addi.png',
          }}
        />
        <Auth/>
      </View>
</View>
  )
}

const styles = StyleSheet.create({
  containerMain:{
    height: 400,
    backgroundColor:'#3C65EC',
    paddingHorizontal:30,
  },
  textMain:{
    color: 'white',
    /* fontWeight:'bold', */
    fontFamily:'Poppins-SemiBold',
    fontSize:70,
    width: '80%',
    

  },
  container: {
    /* flex: 1, */
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor:'white',
  
    
  },
  logo: {
    width: 300,
    height: 150,
    alignItems:'center'
  },

});

export default App
