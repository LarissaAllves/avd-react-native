import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} {...rest}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#EBEBEB",
  },

  button: {
    backgroundColor: "#A020F0",
    padding: 10,
    borderRadius: 4,
    alignItems: "center",
    margin: 100,
  },

  buttonText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
