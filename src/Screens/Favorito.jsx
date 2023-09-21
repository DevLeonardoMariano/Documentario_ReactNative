import React from "react";
import {useNavigation} from "@react-navigation/native"
import { View, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Text } from "@rneui/themed";
import { Searchbar } from "react-native-paper";



const documentarios = [
  {
    id: "1",
    title: "Item 1",
    subtitle: "Subtítulo do Item 1",
    imageUri:{uri: "https://picsum.photos/700"},
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

const Favorito = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.Buscar}>
        <Searchbar style={styles.InputBuscar} placeholder="Buscar" />
      </View>
      <View style={styles.listarDocumentario}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(130, 10, 209)',
    paddingTop: 100,
    
  },
 
  listarDocumentario: {
    backgroundColor: 'rgb(130, 10, 209)',
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(130, 10, 209)',
    paddingHorizontal: 80,
  },
  InputBuscar: {
    width: "100%",
  },
}); 

export default Favorito;