import { React, useState, useEffect, useCallback } from "react";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import { Button, Input, Text } from "@rneui/themed";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import api from "../Service/api";



const Documentario = ({ item, onEdit, onDelete, onPress }) => (
  
  <TouchableOpacity onPress={() => onPress(item.id)}>
  <View style={styles.itemDocumentario}>
    <View style={styles.texto}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.autor}>{item.autor}</Text>
    </View>
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => onEdit(item.id)} style={styles.icon}>
        <Icon name="pencil" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.icon}>
        <Icon name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  </View>
</TouchableOpacity>
);


const GerenciamentoDocumentario = () => {

  const [documentario, setDocumentario] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredDocumentario, setFilteredDocumentario] = useState([]); 
  const navigation = useNavigation();

 
  

  useFocusEffect(
    useCallback(() => {

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
    navigation.navigate("DetalheDocumentario", { id: documentarioId });
  };

  const handleEdit = (documentario) => {
    if (documentario) {
      navigation.navigate("CadastrarDocumentario", { documentarioParaEdicao: documentario, isEdit: true, shouldRefresh: true});
    } else {
      navigation.navigate("CadastrarDocumentario", { isEdit: false });
    }
  }

  const handleDelete = async (documentarioId) => {
    try {

      await api.delete(`documentarios/${documentarioId}`);
  

      const updatedDocumentario = documentario.filter((item) => item.id !== documentarioId);
      setDocumentario(updatedDocumentario);
    } catch (error) {
      console.error('Erro ao excluir o documento:', error);
    }
  };


  const updateFilteredDocumentario = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filtered = documentario.filter((item) => {
      return (
        item.titulo.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.autor.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });

    setFilteredDocumentario(filtered);
  };


  useEffect(() => {
    updateFilteredDocumentario();
  }, [searchTerm, documentario]);



  return (
    <LinearGradient
      colors={["rgba(50, 0, 64, 1)", "rgba(97, 9, 121, 1)"]}
      style={styles.container}
    >
      <Button
        style={styles.button}
        buttonStyle={{
          borderColor: "#EE7F01",
          backgroundColor: "#EE7F01",
          borderRadius: 4,
        }}
        titleStyle={{ color: "white" }}
        title="NOVO"
        type="outline"
        onPress={() => navigation.navigate("CadastrarDocumentario")}
      />
      <LinearGradient
        colors={["rgba(50, 0, 64, 1)", "rgba(97, 9, 121, 1)"]}
        style={styles.Buscar}
      >
        <Searchbar style={styles.InputBuscar}
         placeholder="Buscar"
         value={searchTerm}
         onChangeText={(text) => setSearchTerm(text)}
          />
      </LinearGradient>
      <LinearGradient
        colors={["rgba(97, 9, 121, 1)", "rgba(143, 32, 173, 1)"]}
        style={styles.listarDocumentario}
      >
         <FlatList
          data={filteredDocumentario}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Documentario
              item={item}
              onPress={navigateToDetalhes}
              onEdit={() => handleEdit(item)}
              onDelete={() => handleDelete(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </LinearGradient>
      {/* </View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(130, 10, 209)",
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
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 7, 
  },
  icon: {
    marginHorizontal: 9, 
  },
  button: {
    paddingHorizontal: 120,
    marginBottom: 30,
  },
});

export default GerenciamentoDocumentario;
