import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Input, Text } from "@rneui/themed";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, Image, } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";

const CadastrarDocumentario = () => {
  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const handleNavPrincipal = () => {
    navigation.navigate("Principal");
  };

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
            <TextInput label="Insira o titulo" style={styles.input} />
            <TextInput label="Insira o autor" style={styles.input} />
            <Input
              multiline
              numberOfLines={4}
              label="Insira Documentario"
              style={styles.input}
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
    backgroundColor: "#E3E3E3"
  },
});

export default CadastrarDocumentario;
