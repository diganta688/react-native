import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text className='text-2xl'>Home</Text>
      <Button title='Profile' onPress={()=>navigation.navigate("Profile")}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})