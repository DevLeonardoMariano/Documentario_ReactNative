import { View, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { React, useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import api from "../Service/api";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';






const DetalheDocumentario = () => {

  const route = useRoute();
  const { id } = route.params;
  const [documentariosData, setDocumentariosData] = useState({}); 
  const [favoritos, setFavoritos] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`documentarios/${id}`);
        
        if (response.data && response.data.status === 1 && response.data.data) {
          const documentario = response.data.data;
          const favoritosData = await AsyncStorage.getItem("favoritos");
          const favoritosArray = favoritosData ? JSON.parse(favoritosData) : [];
          const isFavorito = favoritosArray.some((doc) => doc.id === documentario.id);
          documentario.favorito = isFavorito;
          setDocumentariosData(documentario);
        } else {
          // Tratar caso o documentário não seja encontrado
          console.error('Documentário não encontrado:', response.data.message);
          // Pode remover da lista de favoritos ou mostrar uma mensagem adequada
        }
      } catch (error) {
        console.error('Erro ao obter dados do documentário:', error);
      }
    };

    fetchData();
  }, [id]); 

  const enviarAvaliacao = async () => {
    try {
      const response = await api.post(`avaliacao/${id}`, {
        nota: documentariosData.avaliacao,
      });
  
      if (response.data && response.data.status === 1) {
        Alert.alert("Nota enviada com sucesso");
      } else {
        Alert.alert("Informe uma avaliação");
      }
    } catch (error) {
      let erro = "";
  
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        Object.keys(errors).forEach((index) => {
          erro += `\n${errors[index]}`;
        });
      } else if (error.response && error.response.data && error.response.data.message) {
        erro = error.response.data.message;
      } else if (error.message) {
        erro = error.message;
      }
  
      console.error('Erro ao enviar a avaliação:', error);
      Alert.alert("Erro", erro);
    }
  };

// Favoritar -------------------------------------------------------------------------------------------------------------
  const recarregarFavoritos = async () => {
    try {
      const favoritosData = await AsyncStorage.getItem("favoritos");
      if (favoritosData) {
        setFavoritos(JSON.parse(favoritosData));
      }
    } catch (error) {
      console.error("Erro ao recarregar favoritos:", error);
    }
  };

  
  const toggleFavorito = () => {
    const newDocumentario = { ...documentariosData };
    newDocumentario.favorito = !newDocumentario.favorito;
    setDocumentariosData(newDocumentario);
  
    // Adicionar ou remover da lista de favoritos (usando AsyncStorage neste exemplo)
    AsyncStorage.getItem('favoritos')
      .then((favoritos) => {
        const favoritosArray = favoritos ? JSON.parse(favoritos) : [];
        const index = favoritosArray.findIndex((doc) => doc.id === newDocumentario.id);
  
        if (index !== -1) {
          // Remover da lista
          favoritosArray.splice(index, 1);
        } else {
          // Adicionar à lista
          favoritosArray.push(newDocumentario);
        }
  
        AsyncStorage.setItem('favoritos', JSON.stringify(favoritosArray));
      })
      .catch((error) => console.error('Erro ao manipular favoritos:', error));
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
            <Button mode="contained" onPress={enviarAvaliacao} style={styles.botaoAvaliar}>
                Enviar Avaliação
            </Button>
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
    marginTop: 100,
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
  botaoAvaliar: {
    marginTop: 20,
  },
});

export default DetalheDocumentario;
