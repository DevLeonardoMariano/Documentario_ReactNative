import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Input, Text } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Resgistro = () => {
  const navigation = useNavigation();

  const handleNavLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.formulario}>
          <TextInput label="Nome" style={styles.input} />
          <TextInput label="Data de Nascimento" style={styles.input} />
          <TextInput label="CPF" inputMode="numeric" style={styles.input} />
          <TextInput label="E-mail" inputMode="email" style={styles.input} />
          <TextInput label="Telefone" inputMode="tel" style={styles.input} />
          <TextInput
            label="Senha"
            secureTextEntry={true}
            style={styles.input}
          />

          <Button
            style={styles.button}
            buttonStyle={{
              borderColor: "#EE7F01",
              backgroundColor: "#EE7F01",
              borderRadius: 4,
            }}
            titleStyle={{ color: "white" }}
            title="CADASTRAR"
            type="outline"
            onPress={() => handleLogin()}
          />
        </View>
        <Text
          onPress={() => {
            handleNavLogin();
          }}
          style={styles.texto}
        >
          Já tem conta cadastrada? Faça Login
        </Text>
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(130, 10, 209)',
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 120,
  },
  formulario: {
    backgroundColor: 'rgb(249 249 249)',
    width: "85%",
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  button: {
    paddingTop: 80,
    paddingBottom: 40,
    width: 180,
  },
  texto: {
    color: "white",
    paddingTop: 50,
    paddingBottom: 60,
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    color: "#EE7F01",
  },
});

export default Resgistro;
