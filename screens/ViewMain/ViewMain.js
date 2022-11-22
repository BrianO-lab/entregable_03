
import { Button, FlatList, Text, TextInput, View, TouchableOpacity } from 'react-native'
import Input from "../../components/Input/Input"
import ItemCreditCard from "../../components/ItemCreditCard/ItemCreditCard"
import styles from "./ViewMainSS"
import { useState } from 'react'

const ViewMain = () => {
  const [numberCard, setNumberCard] = useState("");
  const [list, setList] = useState([]);
  const [cardSelected, setCardSelected] = useState({});
  const [modalAddInputVisible, setModalAddInputVisible] = useState(false);

  const onHandleChange = (t) => setNumberCard(t);

  const addItem = () => {
    setList((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: numberCard },
    ]);
    setNumberCard("");
  };
  const selectedCard = (id) => {
    setCardSelected(list.find((item) => item.id === id));
  };

  const deleteCard = (id) => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== id)
    );
  };

  const activeModalAddInput = () => {
    setModalAddInputVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row", }}>
      <ItemCreditCard
        value={item.value}
        idItem={item.id}
        actionBtnDelet={deleteCard}
      />
    </View>

  );

  return (
    <View style={styles.container}>
      <View style={styles.itemCard}>
        <FlatList

          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* <BtnItemAdd
        actionModalAddInput={activeModalAddInput}
      /> */}
      <View style={styles.itemAdd}>
        <Input
          placeholder="Ultimos 4 nuemro de la tarjeta"
          placeholderTextColor="grey"
          value={numberCard}
          onChangeText={onHandleChange}
        />
        <TouchableOpacity onPress={addItem} style={styles.btnAddItem}>
          <Text>
            Añadir
          </Text>
        </TouchableOpacity>
      </View>
      {/* <ModalAddInput
        isVisible={modalAddInputVisible}
        actionModalAddItem={addItem}
      /> */}
    </View>

  )
}

export default ViewMain

