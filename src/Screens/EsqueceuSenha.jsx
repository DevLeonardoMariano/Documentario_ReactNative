import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import React from "react";

const EsqueceuSenha = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Esqueceu Senha</Text>
    </View>
  );
};

export default EsqueceuSenha;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12304A",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    color: "#fff"
  }
});
