import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from 'colors'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  }
})