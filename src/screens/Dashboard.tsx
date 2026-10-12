import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Dashboard = () => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-black'>
      <Text className='text-2xl text-white'>Dashboard</Text>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({})