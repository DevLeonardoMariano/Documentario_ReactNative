import { React, useState, useEffect, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Input, Text } from "@rneui/themed";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import api from "../Service/api";


const Documentario = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item.id)}>
    <View style={styles.itemDocumentario}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <View style={styles.texto}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.autor}>{item.autor}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Principal = () => {

  const [documentario, setDocumentario] = useState([]);
  const [refresh, setRefresh] = useState(false)
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      // Lógica de busca e atualização de documentos
      const fetchData = async () => {
        try {
          const response = await api.get('documentarios');
          const updatedDocumentario = response.data.data;
          setDocumentario(updatedDocumentario);
        } catch (error) {
          console.error('Erro ao buscar documentos:', error);
        }
  
        setRefresh(false);
      };
  
      fetchData();
    }, [setDocumentario, setRefresh]) 
  );

  const navigateToDetalhes = (documentarioId) => {
    console.log("ID:", documentarioId);
    navigation.navigate("DetalheDocumentario", { id: documentarioId });
  };




  return (
    <LinearGradient
      colors={["rgba(50, 0, 64, 1)", "rgba(97, 9, 121, 1)"]}
      style={styles.container}
    >
      <LinearGradient
        colors={["rgba(50, 0, 64, 1)", "rgba(97, 9, 121, 1)"]}
        style={styles.Buscar}
      >
        <Searchbar style={styles.InputBuscar} placeholder="Buscar" />
      </LinearGradient>
      <LinearGradient
        colors={["rgba(97, 9, 121, 1)", "rgba(143, 32, 173, 1)"]}
        style={styles.listarDocumentario}
      >
        <FlatList
          data={documentario}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Documentario
              item={item}
              onPress={navigateToDetalhes}
            />
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
    backgroundColor: "rgb(249 249 249)",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 15,
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
    backgroundColor: "rgb(130, 10, 209)",
    paddingHorizontal: 80,
  },
  InputBuscar: {
    width: "100%",
  },
});

export default Principal;
