import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Header } from "../../components/Header";
import { ListCard } from "../../components/ListCard";

interface ListEquipCardProps {
  id: string;
  paNumber: string;
  serieNumber: string;
  marca: string;
  modelo: string;
  centroCusto: string;
  user: string;
  setor: string;
  type: string;
}

export function ListItEquipment() {
  const [equipments, setEquipments] = useState<ListEquipCardProps[]>([]);

  async function loadDataEquipment() {
    const data = await AsyncStorage.getItem("@si:equipment");
    if (data) {
      setEquipments(JSON.parse(data));
    }
  }

  useEffect(() => {
    loadDataEquipment();
  }, []);

  async function handleDelete(id: string) {
    setEquipments((oldValue) =>
      oldValue.filter((equipment) => equipment.id != id)
    );
    await AsyncStorage.setItem("@si:equipment", JSON.stringify(equipments));
  }

  return (
    <View style={styles.container}>
      <Header title="Listar Equipamentos" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={equipments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListCard
            item={item}
            handleDelete={() => handleDelete(item.id)}
            //handleDelete={handleDelete} />
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 16,
    backgroundColor: "#EBEBEB",
    marginTop: 16,
    alignItems: "flex-start",
  },

  buttonDelete: {
    backgroundColor: "#9370db",
    borderRadius: 10,
  },
});
