import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Reels = ({navigation}) => {
  return (
    <View>
      <Text>Reels</Text>
            <Button title='Search' onPress={()=>navigation.navigate("Search")}/>

    </View>
  )
}

export default Reels

const styles = StyleSheet.create({})