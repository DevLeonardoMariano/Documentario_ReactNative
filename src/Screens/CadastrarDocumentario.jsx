import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Input, Text } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CadastrarDocumentario = () => {

  const navigation = useNavigation();
  

  const handleNavPrincipal = () => {
    navigation.navigate("Principal");
  };


 

  return (
    <>
    <KeyboardAwareScrollView  style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.formulario}>
          <Input placeholder="Insira o titulo" style={{ color: "white" }} />
          <Input placeholder=" Insira o autor"  style={{ color: "white" }} />
          <Input placeholder="Selecione a imagem" style={{ color: "white" }} />
          <Input placeholder="Insira Documentario"  style={{ color: "white" }} />
          
          

          <Button
            style={styles.button}
            buttonStyle={{
              borderColor: "#EE7F01",
              backgroundColor: "#EE7F01",
            }}
            titleStyle={{ color: "white" }}
            title="CADASTRAR"
            type="outline"
          />
        </View>
      </KeyboardAwareScrollView>
      </>
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
    paddingTop: 50,
    paddingBottom: 60,
    fontWeight: 400,
  },
});

export default CadastrarDocumentario;