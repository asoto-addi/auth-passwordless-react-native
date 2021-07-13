import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import Auth from './Auth'

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://global-uploads.webflow.com/58c5b8748712539d1de79645/5f21d512b047f87f62607cfb_addi.png',
        }}
      />
      <Auth/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
  logo: {
    width: 300,
    height: 150,
    alignItems:'center'
  },
});

export default App
