import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button } from "../../components/Buton";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function ITEquipament() {
  const [paNumber, setPaNumber] = useState("");

  const [serieNumber, setSerieNumber] = useState("");

  const [marca, setMarca] = useState("");

  const [modelo, setModelo] = useState("");

  const [centroCusto, setCentroCusto] = useState("");

  const [user, setUser] = useState("");

  const [setor, setSetor] = useState("");

  const [type, setType] = useState("");

  async function handleAddEquipment() {
    const equipment = {
      id: String(new Date().getTime()),
      paNumber,
      serieNumber,
      marca,
      modelo,
      centroCusto,
      user,
      setor,
      type,
    };
    setPaNumber("");
    setSerieNumber("");
    setSetor("");
    setCentroCusto("");
    setMarca("");
    setModelo("");
    setUser("");
    setType("");

    try {
      const data = await AsyncStorage.getItem("@si:equipment");

      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, equipment];
      await AsyncStorage.setItem(
        "@si:equipment",
        JSON.stringify(dataFormatted)
      );
      console.log(currentData);
    } catch (err) {
      console.log(err);
      Alert.alert("Erro ao salvar equipamento");
    }

    async function loadDataEquipment() {
      const data = await AsyncStorage.getItem("@si:equipment");
      const currentData = data ? JSON.parse(data) : [];
    }

    useEffect(() => {
      loadDataEquipment;
    }, []);
  }

  return (
    <View style={styles.container}>
      <Header title=" Cadastro de Equipamentos de TI" />

      <Input
        placeholder="Numero do Patrimônio"
        placeholderTextColor="#d3d3d3"
        value={paNumber}
        onChangeText={(value) => setPaNumber(value)}
      />

      <Input
        placeholder="Número de Série"
        placeholderTextColor="#d3d3d3"
        value={serieNumber}
        onChangeText={(value) => setSerieNumber(value)}
      />

      <Input
        placeholder="Marca"
        placeholderTextColor="#d3d3d3"
        value={marca}
        onChangeText={(value) => setMarca(value)}
      />

      <Input
        placeholder="Modelo"
        placeholderTextColor="#d3d3d3"
        value={modelo}
        onChangeText={(value) => setModelo(value)}
      />

      <Input
        placeholder="Centro de custo"
        placeholderTextColor="#d3d3d3"
        value={centroCusto}
        onChangeText={(value) => setCentroCusto(value)}
      />

      <Input
        placeholder="Usuário"
        placeholderTextColor="#d3d3d3"
        value={user}
        onChangeText={(value) => setUser(value)}
      />

      <Input
        placeholder="Setor"
        placeholderTextColor="#d3d3d3"
        value={setor}
        onChangeText={(value) => setSetor(value)}
      />

      <Input
        placeholder="Tipo"
        placeholderTextColor="#d3d3d3"
        value={type}
        onChangeText={(value) => setType(value)}
      />

      <Button title="Incluir" onPress={handleAddEquipment} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#EBEBEB",
  },
});
