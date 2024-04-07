import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");


  const handleButtonPress = () => {
    // Aqui você pode realizar as operações desejadas com os valores dos inputs
    // Por exemplo, você pode imprimir os valores no console
    console.log("Valor do Input 1:", input1);
    console.log("Valor do Input 2:", input2);
    console.log("Valor do Input 3:", input3);
    console.log("Valor do Input 4:", input4);
  };

  

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Input 1"
          keyboardType="numeric"
          value={input1}
          onChangeText={setInput1}
        />
        <TextInput
          style={styles.input}
          placeholder="Input 2"
          keyboardType="numeric"
          value={input2}
          onChangeText={setInput2}
        />
        <TextInput
          style={styles.input}
          placeholder="Input 3"
          keyboardType="numeric"
          value={input3}
          onChangeText={setInput3}
        />
        <TextInput
          style={styles.input}
          placeholder="Input 4"
          keyboardType="numeric"
          value={input4}
          onChangeText={setInput4}
        />
        <Button title="Executar" onPress={handleButtonPress} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  chartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
});
