import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import React from "react";

const Perfil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil</Text>
    </View>
  )
}

export default Perfil


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12304A",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    color: "#fff",
  },
});
