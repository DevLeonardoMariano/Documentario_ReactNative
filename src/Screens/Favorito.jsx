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

const Favorito = () => {
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
    color: "gray",
  },
  Buscar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#12304A",
    paddingHorizontal: 80,
  },
}); 

export default Favorito;