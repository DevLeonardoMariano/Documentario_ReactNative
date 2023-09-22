import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Input, Text } from "@rneui/themed";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
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

const Documentario = ({ item, onEdit, onDelete }) => (
    <View style={styles.itemDocumentario}>
      <Image style={styles.image} source={item.imageUri} />
      <View style={styles.texto}>
        <Text style={styles.titulo}>{item.title}</Text>
        <Text style={styles.autor}>{item.subtitle}</Text>
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
  );



const GerenciamentoDocumentario = () => {
  const navigation = useNavigation();



  const handleEdit = (itemId) => {
    // Implemente a lógica de edição aqui
    // Você pode navegar para a tela de edição com base no ID do item
    // navigation.navigate('TelaDeEdicao', { itemId });
  };

  const handleDelete = (itemId) => {
    // Implemente a lógica de exclusão aqui
    // Você pode mostrar um diálogo de confirmação ou executar a exclusão diretamente
    // Se você desejar uma confirmação, pode usar bibliotecas como `react-native-modal` para criar um modal de confirmação
    // ou simplesmente navegar para uma tela de confirmação de exclusão
  };

  return (
    <LinearGradient colors={[
      'rgba(50, 0, 64, 1)',
      'rgba(97, 9, 121, 1)']}
      style={styles.container}>
    {/* <View style={styles.container}> */}
        <Button
            style={styles.button}
            buttonStyle={{
              borderColor: "#EE7F01",
              backgroundColor: "#EE7F01",
              borderRadius: 4,
            }}
            titleStyle={{ color: "white", }}
            title="NOVO"
            type="outline"
            onPress={() => navigation.navigate("CadastrarDocumentario",)}
          />
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
    {/* </View> */}
    </LinearGradient>
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'rgb(130, 10, 209)',
    paddingHorizontal: 80,
  },
  InputBuscar: {
    width: "100%",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center", // Alinha os ícones verticalmente
    marginLeft: 7, // Adicione a margem desejada entre os ícones
  },
  icon: {
    marginHorizontal: 9, // Espaçamento horizontal entre os ícones
  },
  button:{
    paddingHorizontal: 120,
    marginBottom: 30,
  }
});

export default GerenciamentoDocumentario;
