import { useNavigation } from "@react-navigation/native";
import { React, useState } from "react";
import { Button, Input, Text } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from 'expo-linear-gradient';
import api from "../Service/api";


const Resgistro = () => {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleNavLogin = () => {
    navigation.navigate("Login");
  };

  const cadastrar = async () => {
    
    

    try {
      const response = await api.post('users', {
        nome,
        cpf,
        email,
        telefone,
        password,
        user_tipos_id: 1
      });
  
      console.log("Resposta da solicitação:", response.data);
  
      if (response.data.status === 1) {
        // Registro bem-sucedido
        Alert.alert("Cadastro realizado com sucesso")
        navigation.navigate("Login");
      } else {
        // Verifique se há erros de validação
        if (response.data.errors) {
          setErrors(response.data.errors);
        } else {
          const erro = response.data.error || 'Erro desconhecido no servidor';
          console.log('Erro do servidor:', erro);
          Alert.alert('Erro', erro);
        }
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      Alert.alert('Erro', 'Ocorreu um erro durante a solicitação. Verifique sua conexão com a internet.');
    }
  };

  return (
    <>
        <LinearGradient colors={['rgba(50, 0, 64, 1)',
      'rgba(97, 9, 121, 1)',
      'rgba(143, 32, 173, 1)']}
      style={styles.container}>
        <View style={styles.formulario}>
          <TextInput label="Nome" style={styles.input} onChangeText={(text) => setNome(text)} />
          <TextInput label="CPF" inputMode="numeric" style={styles.input} onChangeText={(text) => setCpf(text)} />
          <TextInput label="E-mail" inputMode="email" style={styles.input} onChangeText={(text) => setEmail(text)} />
          <TextInput label="Telefone" inputMode="tel" style={styles.input} onChangeText={(text) => setTelefone(text)} />
          <TextInput
            label="Senha"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
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
            onPress={cadastrar}
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
        </LinearGradient> 
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(130, 10, 209)',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
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
    color: "#000",
    backgroundColor: "#E3E3E3"
  },
});

export default Resgistro;
