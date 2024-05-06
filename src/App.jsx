import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from 'colors'

const App = () => {
  return (
    <View style={styles.container}/>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  }
})