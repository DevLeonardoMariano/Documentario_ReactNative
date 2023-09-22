import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Input, Text } from "@rneui/themed";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';


const documentarios = [
  {
    id: "1",
    title: "Item 1",
    subtitle: "Subtítulo do Item 1",
    imageUri: {uri: "https://picsum.photos/700"},
  },
  {
    id: "2",
    title: "Item 2",
    subtitle: "Subtítulo do Item 2",
    imageUri:{uri: "https://picsum.photos/700"},
  },
  {
    id: "3",
    title: "Item 3",
    subtitle: "Subtítulo do Item 3",
    imageUri: {uri: "https://picsum.photos/700"},
  },
  {
    id: "4",
    title: "Item 4",
    subtitle: "Subtítulo do Item 4",
    imageUri: {uri: "https://picsum.photos/700"},
  },
  {
    id: "5",
    title: "Item 5",
    subtitle: "Subtítulo do Item 5",
    imageUri: {uri: "https://picsum.photos/700"},
  },
  {
    id: "6",
    title: "Item 6",
    subtitle: "Subtítulo do Item 6",
    imageUri: {uri: "https://picsum.photos/700"},
  },
  {
    id: "7",
    title: "Item 7",
    subtitle: "Subtítulo do Item 7",
    imageUri:{uri: "https://picsum.photos/700"},
  },
  {
    id: "8",
    title: "Item 8",
    subtitle: "Subtítulo do Item 8",
    imageUri: {uri: "https://picsum.photos/700"},
  },
  {
    id: "9",
    title: "Item 9",
    subtitle: "Subtítulo do Item 9",
    imageUri: {uri: "https://picsum.photos/700"},
  },
];

const Documentario = ({ item }) => (
  <View style={styles.itemDocumentario}>
    <Image style={styles.image} source={item.imageUri} />
    {/* <Image style={styles.image} source={{uri: "https://picsum.photos/700"}} /> */}
    <View style={styles.texto}>
      <Text style={styles.titulo}>{item.title}</Text>
      <Text style={styles.autor}>{item.subtitle}</Text>
    </View>
  </View>
);



const Princpal = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={[
      'rgba(50, 0, 64, 1)',
      'rgba(97, 9, 121, 1)']}
      style={styles.container}>
      <LinearGradient colors={[
        'rgba(50, 0, 64, 1)',
        'rgba(97, 9, 121, 1)']}
        style={styles.Buscar}>
        <Searchbar style={styles.InputBuscar} placeholder="Buscar" />
      </LinearGradient>
      <LinearGradient colors={[
        'rgba(97, 9, 121, 1)',
        'rgba(143, 32, 173, 1)']}
        style={styles.listarDocumentario}>

        <FlatList
          data={documentarios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("DetalheDocumentario", { item })}
            >
              <Documentario item={item} />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },

  listarDocumentario: {
    padding: 10,
    flex: 1,
    marginBottom: 75,
  },
  itemDocumentario: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    backgroundColor: 'rgb(249 249 249)',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 15, // Para uma imagem circular
  },
  texto: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  autor: {
    fontSize: 14,
    color: "#000",
  },
  Buscar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'rgb(130, 10, 209)',
    paddingHorizontal: 80,
  },
  InputBuscar: {
    width: "100%",
  },
});

export default Princpal;
