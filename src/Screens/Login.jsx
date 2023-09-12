import {useNavigation} from "@react-navigation/native"
import React from "react";
import { Button, Input, Text } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = () => {
  const navigation = useNavigation();

  const handleNavRegistro = () => {
    navigation.navigate("Registro");
  };

  const hendleNavEsqueceuSenha = () => {
    navigation.navigate("EsqueceuSenha")
  }

  const handleLogin = () => {

    navigation.navigate('TabNavigator', {screen: 'Principal'});
  };


  return (
    <KeyboardAwareScrollView  style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.formulario}>
        <Input placeholder="E-mail" inputMode="email" style={{ color: "white" }} />
        <Input
          secureTextEntry={true}
          placeholder="Senha"
          style={{ color: "white" }}
        />

        <Text  onPress={() => {hendleNavEsqueceuSenha();}} style={styles.texto}>Esqueceu a senha?</Text>
        <Text onPress={() => {handleNavRegistro();}} style={styles.texto}>Cadastra-se</Text>
        <Button
          style={styles.button}
          buttonStyle={{
            borderColor: "#EE7F01",
            backgroundColor: "#EE7F01",
          }}
          titleStyle={{ color: "white" }}
          title="ACESSAR"
          type="outline"
          onPress={() => handleLogin()}
        />
      </View>
      </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12304A",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
  },
  formulario: {
    backgroundColor: "#264968",
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
    paddingTop: 40,
    fontWeight: 400,
  },
});

export default Login;
