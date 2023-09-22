import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Input, Text } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from 'expo-linear-gradient';


const CadastrarDocumentario = () => {
  const navigation = useNavigation();

  const handleNavPrincipal = () => {
    navigation.navigate("Principal");
  };

  return (
    <>
    <LinearGradient  colors={['rgba(50, 0, 64, 1)', 
    'rgba(97, 9, 121, 1)', 
    'rgba(143, 32, 173, 1)']} 
    style={styles.container}>
    
      <KeyboardAwareScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.formulario}>
          <TextInput label="Insira o titulo" style={styles.input} />
          <TextInput label="Insira o autor" style={styles.input} />
          <TextInput label="Selecione a imagem" style={styles.input} />
          <TextInput label="Insira Documentario" style={styles.input} />

          <Button
            style={styles.button}
            buttonStyle={{
              borderColor: "#EE7F01",
              backgroundColor: "#EE7F01",
              borderRadius: 4,
            }}
            titleStyle={{ color: "white" }}
            title="FINALIZAR"
            type="outline"
            onPress={() => handleNavPrincipal()}
          />
        </View>
      </KeyboardAwareScrollView>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
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
    fontWeight: 400,
  },
  input: {
    width: "100%",
    marginBottom: 20,
    color: "#EE7F01",
  },
});

export default CadastrarDocumentario;
