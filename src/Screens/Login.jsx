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
    
        if (response.data && response.data.status === true && response.data.token) {
          // Login bem-sucedido
          Alert.alert("Sucesso", "Bem-vindo ao mundo DOCUMENTARIO");
          const token = response.data.token;
          const usuario = response.data.usuario ? response.data.usuario : {};
    
          await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
          await AsyncStorage.setItem('token', token); // Use 'token' como chave
          navigation.navigate("TabNavigator", { screen: "Principal" });
        } else {
          Alert.alert("Erro", "Email ou senha incorreta");
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          let resposta = error.response.data.errors;
          var erro = "";
    
          Object.keys(resposta).forEach(function(index){
            erro += " " + `${resposta[index]} \n`;
          });
    
          Alert.alert("Erro", erro);
        } else {
          Alert.alert("Erro", "Email ou senha incorreta");
        }
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
              
            />

            <TextInput
              label="Senha"
              style={styles.input}
              secureTextEntry={true}
              onChangeText={(text) => setSenha(text)}
              
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
