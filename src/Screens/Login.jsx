import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Input, Text } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
  const navigation = useNavigation();

  const handleNavRegistro = () => {
    navigation.navigate("Registro");
  };

  const handleLogin = () => {
    navigation.navigate("TabNavigator", { screen: "Principal" });
  };

  return (
    <LinearGradient  colors={['rgba(50, 0, 64, 1)', 'rgba(97, 9, 121, 1)', 'rgba(143, 32, 173, 1)']} style={styles.container}>
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer} 
    >
       
      <View style={styles.formulario}>
        <TextInput label="E-mail" style={styles.input} inputMode="email" />

        <TextInput label="Senha" style={styles.input} secureTextEntry={true} />

        <Button
          style={styles.button}
          buttonStyle={{
            borderColor: "#EE7F01",
            backgroundColor: "#EE7F01",
            borderRadius: 4,
          }}
          titleStyle={{ color: "white" }}
          title="ACESSAR"
          type="outline"
          onPress={() => handleLogin()}
        />
        <TouchableOpacity >
           <Text style={styles.texto} onPress={() => {handleNavRegistro();}}> Cadastra-se</Text>
        </TouchableOpacity>
      </View>
      
    </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "rgb(130, 10, 209)",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 190,
  },
  formulario: {
    backgroundColor: "rgb(249 249 249)",
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
    paddingBottom: 20,
    width: 180,
  },
  texto: {
    color: "#000",
    paddingTop: 25,
    fontWeight: "bold",
    fontSize: 16,
  },

  input: {
    width: "100%",
    marginBottom: 20,
    color: "#EE7F01",
  },
});

export default Login;
