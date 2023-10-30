import { useNavigation, useRoute } from "@react-navigation/native";
import { React, useState, useEffect } from "react";
import { Button, Input, Text } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, Image, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import api from "../Service/api"; 

const CadastrarDocumentario = () => {

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [resumo, setResumo] = useState("");
  const [image, setImage] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const route = useRoute();
  const documentarioParaEdicao = route.params ? route.params.documentarioParaEdicao : null;
  const isEdit = route.params ? route.params.isEdit : false;
  
  const navigation = useNavigation();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    if (isEdit) {
      if (route.params && route.params.documentarioParaEdicao) {
        const documentario = route.params.documentarioParaEdicao;
        setTitulo(documentario.titulo);
        setAutor(documentario.autor);
        setResumo(documentario.resumo);
        setImage(documentario.image_url);
      }
    }
  }, [route.params]);

  const cadastrarDocumentario = async () => {
    try {

      const imageName = image ? image.split('/').pop() : null;

      console.log('Caminho da imagem a ser enviado para a API:', imageName);
  
      const response = await api.post("documentarios", {
        titulo,
        autor,
        resumo,
        image: imageName,
      });
  
      console.log('Resposta da API (sucesso):', response.data);
      
  
      Alert.alert("Sucesso", "Documento cadastrado com sucesso");
      setRefresh(true);
      navigation.navigate("GerenciamentoDocumentario");
    } catch (error) {
      console.error('Erro ao cadastrar o documento:', error);
  
      if (error.response) {
        console.error('Resposta da API (erro):', error.response.data);
      }
  
      Alert.alert("Erro", "Não foi possível cadastrar o documento. Verifique sua conexão e tente novamente.");
    }
  };
  
  const atualizarDocumentario = () => {
    api.put(`documentarios/${documentarioParaEdicao.id}`, {
      titulo,
      autor,
      resumo,
      image: image
    })
      .then((response) => {
        console.log("Documento atualizado com sucesso:", response.data);
        Alert.alert("Sucesso", "Documento atualizado com sucesso");
        setRefresh(true);
        navigation.navigate("GerenciamentoDocumentario");
      })
      .catch((error) => {
        console.error("Erro ao atualizar o documento:", error);
      });
  };
  
  const handleCadastrarOuAtualizar = () => {
    if (isEdit) {
      atualizarDocumentario();
    } else {
      cadastrarDocumentario();
    }
  };


  return (
    <>
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
              label="Insira o titulo"
              style={styles.input}
              value={titulo}
              onChangeText={(text) => setTitulo(text)}
            />
            <TextInput
              label="Insira o autor"
              style={styles.input}
              value={autor}
              onChangeText={(text) => setAutor(text)}
            />
            <Input
              multiline
              numberOfLines={4}
              label="Insira Documentario"
              style={styles.input}
              value={resumo}
              onChangeText={(text) => setResumo(text)}
            />
            <Button
              style={styles.buttonIMG}
              buttonStyle={{
                borderColor: "rgba(179, 113, 240, 1)",
                backgroundColor: "rgba(179, 113, 240, 1)",
                borderRadius: 4,
              }}
              titleStyle={{ color: "white" }}
              title="IMAGEM"
              type="outline"
              onPress={pickImage}
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200, borderRadius: 5 }}
              />
            )}

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
              onPress={() => handleCadastrarOuAtualizar()}
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
    backgroundColor: "rgb(249 249 249)",
    width: "85%",
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    marginBottom: 120,
    alignItems: "center",
  },
  button: {
    paddingTop: 80,
    paddingBottom: 40,
    width: 180,
  },
  buttonIMG: {
    paddingTop: 20,
    paddingBottom: 20,
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
    color: "#000",
    backgroundColor: "#E3E3E3",
  },
});

export default CadastrarDocumentario;
