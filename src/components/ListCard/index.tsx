import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface ListEquipCardProps {
  item: object;
  handleDelete: () => void;
}

export function ListCard({ item, handleDelete }: ListEquipCardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {Object.values(item).map((data, index) => (
          <Text style={styles.textList} key={index}>
            {index > 0 && data}
          </Text>
        ))}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor: "#EBEBEB",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textList: {
    fontSize: 16,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#9370DB",
    borderRadius: 10,
    padding: 10,
  },
});
