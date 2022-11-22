import { StyleSheet, Text, TextInput, View } from 'react-native'
import styles from '../../components/Input/InputSS'
import React from 'react'

const Input = ({ ...resProps }) => {
  return (
    <TextInput
      style={styles.input}
      {...resProps}
    />
  )
}

export default Input

