import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const onHandleChangeText = (text) => {
    setTarea(text);
  };

  const addItem = () => {
    setTareas((prevTareas) => [
      ...prevTareas,
      { id: Date.now(), value: tarea },
    ]);
    setTarea("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tittle}>Lista De Tareas</Text>
      <View style={styles.containerMain}>
        <TextInput
          placeholder="Item de lista"
          style={styles.input}
          onChangeText={onHandleChangeText}
          value={tarea}
        />
        <TouchableOpacity onPress={addItem} style={styles.buttonContainer}>
          <View style={styles.buttonView}>
            <Text style={styles.button}>Agregar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.itemList}>
        {tareas.map((item) => (
          <View key={`item-${item.id}`} style={styles.itemContainer}>
            <Text style={styles.item}>{item.value}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(196,235,0)",
  },
  tittle: {
    fontSize: 30,
    marginTop: 70,
    textAlign: "center",
  },
  containerMain: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    marginTop: 0,
    width: "70%",
    borderBottomColor: "#4A306D",
    borderBottomWidth: 1,
    height: 40,
    color: "#212121",
  },
  buttonContainer: {},
  buttonView: {
    backgroundColor: "rgb(254,254,0)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 15,
  },
  button: {
    color:"#000",
    fontSize:20,
    fontWeight:800,
  },
  itemList: {
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor:"blue",
  },
  itemContainer: {
    padding:15,
  },
  item: {
    padding:15,
  },
});
