import { useNavigation } from "@react-navigation/native";
import { React, useState } from "react";
import { Button, Input, Text } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import api from "../Service/api";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

  const handleNavRegistro = () => {
    navigation.navigate("Registro");
  };

  const signIn = async () => {
    try {
      const response = await api.post('login', {
        email,
        password,
      });
  
      console.log("Resposta da solicitação:", response.data);
  
      if (response.data.status === true && response.data.token) {
        // Login bem-sucedido
        Alert.alert("Bem vindo ao mundo DOCUMENTARIO")
        const token = response.data.token;
        await AsyncStorage.setItem('TOKEN', token);
        navigation.navigate("TabNavigator", { screen: "Principal" });
      } else {
        // Verifique se há erros de validação
        if (response.data.errors) {
          setErrors(response.data.errors);
        } else {
          const erro = response.data.error || 'Erro desconhecido no servidor';
          Alert.alert('Erro', erro);
        }
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      Alert.alert('Erro', 'Ocorreu um erro durante a solicitação. Verifique sua conexão com a internet.');
    }
  };

  
  
  


  return (
    <LinearGradient
      colors={[
        "rgba(50, 0, 64, 1)",
        "rgba(97, 9, 121, 1)",
        "rgba(143, 32, 173, 1)",
      ]}
      style={styles.container}
    >
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.formulario}>
          <TextInput
            label="E-mail"
            style={styles.input}
            inputMode="email"
            onChangeText={(text) => setEmail(text)}
            error={errors.email ? errors.email[0] : null}
          />

          <TextInput
            label="Senha"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setSenha(text)}
            error={errors.password ? errors.password[0] : null}
          />

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
            onPress={signIn}
          />
          <TouchableOpacity>
            <Text
              style={styles.texto}
              onPress={() => {
                handleNavRegistro();
              }}
            >
              {" "}
              Cadastra-se
            </Text>
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
    color: "#000",
    backgroundColor: "#E3E3E3",
  },
});

export default Login;
