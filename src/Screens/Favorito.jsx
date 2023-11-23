import { React, useState, useEffect, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import { Searchbar, Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Documentario = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item.id)}>
    <View style={styles.itemDocumentario}>
      <View style={styles.texto}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.autor}>{item.autor}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Favorito = () => {
  const [favoritos, setFavoritos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFavoritos, setFilteredFavoritos] = useState([]);
  const navigation = useNavigation();
  const [user, setUser] = useState({
    id: ""
  });


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token'); // Use a mesma chave 'token' aqui
        console.log('Token:', token);
  
        const usuarioData = await AsyncStorage.getItem('usuario');
        const usuario = JSON.parse(usuarioData);
        console.log('Dados Tela Favorito:', usuario);
  
        if (token && usuario) {
          setUser({
            id: usuario.id, 
          });
        }
      } catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
      }
    };
  
    fetchUserData();
  }, []);

  const adicionarAosFavoritos = async (documentario) => {
    try {
      const favoritosData = await AsyncStorage.getItem(`favoritos_${user.id}`);
      let favoritos = favoritosData ? JSON.parse(favoritosData) : [];

      favoritos.push(documentario);

      await AsyncStorage.setItem(`favoritos_${user.id}`, JSON.stringify(favoritos));
      console.log('Documentário adicionado aos favoritos com sucesso!');
    } catch (error) {
      console.error("Erro ao adicionar aos favoritos:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchFavoritos = async () => {
        try {
          const favoritosData = await AsyncStorage.getItem("favoritos");
          if (favoritosData) {
            setFavoritos(JSON.parse(favoritosData));
          }
        } catch (error) {
          console.error("Erro ao obter favoritos:", error);
        }
      };

      fetchFavoritos();
    }, [])
  );

  const navigateToDetalhes = (documentarioId) => {
    navigation.navigate("DetalheDocumentario", { id: documentarioId });
  };

  const updateFilteredFavoritos = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filtered = favoritos.filter((item) => {
      return (
        item.titulo.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.autor.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    setFilteredFavoritos(filtered);
  };

  useEffect(() => {
    updateFilteredFavoritos();
  }, [searchTerm, favoritos]);

  const limparFavoritos = async () => {
    try {
      // Limpe os favoritos no AsyncStorage
      await AsyncStorage.removeItem("favoritos");
      // Atualize o estado para refletir a mudança
      setFavoritos([]);
      setFilteredFavoritos([]);
      console.log('Favoritos limpos com sucesso!');
    } catch (error) {
      console.error("Erro ao limpar favoritos:", error);
    }
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
        <Searchbar
          style={styles.InputBuscar}
          placeholder="Buscar"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        {/* <Button onPress={limparFavoritos}>Limpar Favoritos</Button> */}
      </LinearGradient>
      <LinearGradient
        colors={["rgba(97, 9, 121, 1)", "rgba(143, 32, 173, 1)"]}
        style={styles.listarDocumentario}
      >
        {favoritos.length === 0 && (
          <Text style={{ color: "#fff", textAlign: "center", marginTop: 15}}>
            Nenhum documentário favorito encontrado.
          </Text>
        )}
        <FlatList
          data={filteredFavoritos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Documentario item={item} onPress={navigateToDetalhes} />
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
    backgroundColor: "rgb(130, 10, 209)",
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
    backgroundColor: "rgb(130, 10, 209)",
    paddingHorizontal: 80,
  },
  InputBuscar: {
    width: "100%",
  },
});

export default Favorito;
