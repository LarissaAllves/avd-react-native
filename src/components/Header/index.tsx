import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IHeaderProps {
  title: string;
}

export function Header({ title }: IHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    backgroundColor: "#A020F0",
    padding: 22,
    paddingBottom: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
