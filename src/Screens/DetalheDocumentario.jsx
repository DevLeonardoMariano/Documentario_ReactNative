import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { React, useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import api from "../Service/api";

import { useRoute } from "@react-navigation/native";





const DetalheDocumentario = () => {

  const route = useRoute();
  const { id } = route.params;
  const [documentariosData, setDocumentariosData] = useState({}); 


  useEffect(() => {
    api.get(`documentarios/${id}`).then((res) => {
      console.log(res.data.data);
      setDocumentariosData(res.data.data);
    });
  }, [id]);


  // Favoritar -------------------------------------------------------------------------------------------------------------
  const toggleFavorito = () => {
    const newDocumentario = { ...documentariosData };
    newDocumentario.favorito = !newDocumentario.favorito;
    setDocumentariosData(newDocumentario);
  };

  // Avalição Final -------------------------------------------------------------------------------------------------------------

  const toggleAvaliacao = (estrelaIndex) => {

    const newDocumentario = { ...documentariosData };
    newDocumentario.avaliacao = estrelaIndex + 1; 
    setDocumentariosData(newDocumentario);
  };

  return (
    <LinearGradient colors={['rgba(50, 0, 64, 1)', 'rgba(97, 9, 121, 1)', 'rgba(143, 32, 173, 1)']} style={styles.container}>
      <ScrollView style={styles.container}>
        <Card style={styles.card}>
        <Card.Cover source={{ uri: documentariosData.image_url }} style={styles.imagem} />
          <Card.Content>
            <View style={styles.tituloContainer}>
              <Text style={styles.titulo}>{documentariosData.titulo}</Text>
              <TouchableOpacity onPress={toggleFavorito}>
                {documentariosData.favorito ? (
                  <Icon name="star" size={24} color="gold" />
                ) : (
                  <Icon name="star-o" size={24} color="gray" />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.autor}>{documentariosData.autor}</Text>
            <ScrollView style={styles.resumoContainer}>
              <Text style={styles.resumo}>{documentariosData.resumo}</Text>
            </ScrollView>
            <Text style={styles.avaliacao}>Avaliação:</Text>
            <View style={styles.estrelasContainer}>
              {Array(5).fill(0).map((_, index) => (
                 <TouchableOpacity key={index} onPress={() => toggleAvaliacao(index)}>
                 <Icon
                   name={index < documentariosData.avaliacao ? "star" : "star-o"}
                   size={24}
                   color="gold"
                 />
               </TouchableOpacity>
              ))}
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },

  card: {
    flex: 1,
    marginBottom: 1,
    backgroundColor: "white", // Cor de fundo do Card
  },
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
  },
  autor: {
    fontSize: 16,
    marginTop: 4,
  },
  resumo: {
    marginTop: 25,
  },
  imagem: {
    marginBottom: 20,
  },

  avaliacao: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
  },
  estrelasContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 20,
    marginBottom:30,
  },
});

export default DetalheDocumentario;
