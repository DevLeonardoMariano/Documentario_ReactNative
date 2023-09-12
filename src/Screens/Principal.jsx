import React from "react";
import {useNavigation} from "@react-navigation/native"
import { View, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Text } from "@rneui/themed";



const documentarios = [
  {
    id: "1",
    title: "Item 1",
    subtitle: "Subtítulo do Item 1",
    imageUri: require('../../assets/favicon.png'),
  },
  {
    id: "2",
    title: "Item 2",
    subtitle: "Subtítulo do Item 2",
    imageUri: require('../../assets/icon.png'),
  },
  {
    id: "3",
    title: "Item 3",
    subtitle: "Subtítulo do Item 3",
    imageUri: require('../../assets/adaptive-icon.png'),
  },
  {
    id: "4",
    title: "Item 4",
    subtitle: "Subtítulo do Item 4",
    imageUri: require('../../assets/favicon.png'),
  },
  {
    id: "5",
    title: "Item 5",
    subtitle: "Subtítulo do Item 5",
    imageUri: require('../../assets/icon.png'),
  },
  {
    id: "6",
    title: "Item 6",
    subtitle: "Subtítulo do Item 6",
    imageUri: require('../../assets/adaptive-icon.png'),
  },
  {
    id: "7",
    title: "Item 7",
    subtitle: "Subtítulo do Item 7",
    imageUri: require('../../assets/favicon.png'),
  },
  {
    id: "8",
    title: "Item 8",
    subtitle: "Subtítulo do Item 8",
    imageUri: require('../../assets/icon.png'),
  },
  {
    id: "9",
    title: "Item 9",
    subtitle: "Subtítulo do Item 9",
    imageUri: require('../../assets/adaptive-icon.png'),
  },
  
];

const Documentario = ({ item }) => (
  <View style={styles.itemDocumentario}>
    <Image style={styles.image} source={item.imageUri} />
    <View style={styles.texto}>
      <Text style={styles.titulo}>{item.title}</Text>
      <Text style={styles.autor}>{item.subtitle}</Text>
    </View>
  </View>
);

const Princpal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.Buscar}>
        <Input
          placeholder="Buscar Documentário"
          leftIcon={{ type: "font-awesome", name: "search", color: "white" }}
          inputStyle={{ color: "white" }}
        />
      </View>
      <View style={styles.listarDocumentario}>
      <FlatList
          data={documentarios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detalhes", { item })}
            >
              <Documentario item={item} />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12304A",
    paddingTop: 120,
    
  },
 
  listarDocumentario: {
    backgroundColor: "#12304A",
    padding: 10,
    flex: 1,
    marginBottom: 75,
  },
  itemDocumentario: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    backgroundColor: "#264968",
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
    color: "white",
    marginBottom: 10,
  },
  autor: {
    fontSize: 14,
    color: "white",
  },
  Buscar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#12304A",
    paddingHorizontal: 80,
  },
}); 

export default Princpal;
