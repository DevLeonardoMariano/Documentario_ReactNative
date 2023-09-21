import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

const documentarios = [
  {
    id: "1",
    title: "Teste do map",
    subtitle: "Subtítulo do Item 1",
    imageUri: "https://picsum.photos/700",
    autor: "Autor Leonardo",
    resumo:
      "Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 dadasdasdasdasdasdasdasdas adasdasdasd dasdasdasdasdasdasdasd  dasdasdasdasd dasdasdasdsad Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 Resumo do Item 1 dadasdasdasdasdasdasdasdas adasdasdasd dasdasdasdasdasdasdasd  dasdasdasdasd dasdasdasdsad dasdsadsadasdasd  dasdasdasdas  dasdasdasd dds ss saddsadasdsadsadasdasd  dasdasdasdas  dasdasdasd dds ss saddsa dsadadad",
    favorito: false,
    avaliacao: 0,
  },
];

const DetalheDocumentario = () => {
  const [documentariosData, setDocumentariosData] = useState(documentarios);

  // Favoritar -------------------------------------------------------------------------------------------------------------
  const toggleFavorito = (id) => {
    // Encontre o documento pelo ID
    const documentoIndex = documentariosData.findIndex((doc) => doc.id === id);

    if (documentoIndex !== -1) {
      // Clone o array de documentos para evitar mutações diretas
      const newDocumentariosData = [...documentariosData];
      // Inverta o estado de favorito do documento
      newDocumentariosData[documentoIndex].favorito =
        !newDocumentariosData[documentoIndex].favorito;
      // Atualize o estado
      setDocumentariosData(newDocumentariosData);
    }
  };

  // Avalição Final -------------------------------------------------------------------------------------------------------------

  const toggleAvaliacao = (id, estrelaIndex) => {
    // Encontre o documento pelo ID
    const documentoIndex = documentariosData.findIndex((doc) => doc.id === id);

    if (documentoIndex !== -1) {
      // Clone o array de documentos para evitar mutações diretas
      const newDocumentariosData = [...documentariosData];
      // Atualize o estado de avaliação do documento com base no índice da estrela clicada
      newDocumentariosData[documentoIndex].avaliacao = estrelaIndex + 1; // +1 porque os índices começam em 0
      // Atualize o estado
      setDocumentariosData(newDocumentariosData);
    }
  };

  return (
    
    <ScrollView style={styles.container}>
    {documentarios.map((documentario) => (
      <Card key={documentario.id} style={styles.card}>
        <Card.Cover
          source={{ uri: documentario.imageUri }}
          style={styles.imagem}
        />
        <Card.Content>
          <View style={styles.tituloContainer}>
            <Text style={styles.titulo}>{documentario.title}</Text>
            <TouchableOpacity onPress={() => toggleFavorito(documentario.id)}>
              {documentario.favorito ? (
                <Icon name="star" size={24} color="gold" />
              ) : (
                <Icon name="star-o" size={24} color="gray" />
              )}
            </TouchableOpacity>
          </View>

          <Text style={styles.autor}>{documentario.autor}</Text>

          {/* Adicione ScrollView para o resumo */}
          <ScrollView style={styles.resumoContainer}>
            <Text style={styles.resumo}>{documentario.resumo}</Text>
          </ScrollView>

          <Text style={styles.avaliacao}>Avaliação:</Text>
          <View style={styles.estrelasContainer}>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    toggleAvaliacao(documentario.id, index);
                  }}
                >
                  <Icon
                    name={index < documentario.avaliacao ? "star" : "star-o"} // Verifique se o índice é menor do que a avaliação para definir a cor da estrela
                    size={24}
                    color="gold"
                  />
                </TouchableOpacity>
              ))}
          </View>
        </Card.Content>
      </Card>
    ))}
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(130, 10, 209)",
    paddingTop: 0,
  },

  card: {
    flex: 1,
    marginBottom: 90,
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
    marginTop: 20,
  },
  estrelasContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 20,
  },
});

export default DetalheDocumentario;
