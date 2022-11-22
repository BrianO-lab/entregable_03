import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./ItemCreditCardSS"

const ItemCreditCard = (props) => {
  const { value, actionBtnDelet, idItem } = props;
  return (
    <View style={styles.itemCreditCard}>
      <View style={styles.itemCreditCardContainer} >
       <TouchableOpacity style={styles.textContainer}>
          <Text style={styles.text}>Terminada en {value}</Text>
          <Text style={styles.text}>$12345</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnDeletContainer} onPress={() => actionBtnDelet(idItem)} >
          <Text style={styles.btnDeletText}> X</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default ItemCreditCard