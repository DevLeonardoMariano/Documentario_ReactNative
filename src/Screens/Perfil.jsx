import { View, StyleSheet } from "react-native";
import { Avatar, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {useUser} from "../Context/UserContext";





const Perfil = () => {

  const {user,setUser} = useUser();




  return (
    <LinearGradient colors={['rgba(50, 0, 64, 1)',
      'rgba(97, 9, 121, 1)',
      'rgba(143, 32, 173, 1)']}
      style={styles.container}>
    <View style={styles.imagemContainer}>
      <Avatar.Image size={200} source={{uri: "https://picsum.photos/700"}} style={styles.imagem} />
    </View>
    <View style={styles.textoContainer}>
    <View style={styles.textoRow}>
          <Icon name="user" size={24} style={styles.icon} />
          <Text style={styles.titulo}>Nome</Text>
        </View>
        <Text style={styles.valor}>{user.nome}</Text>

        <View style={styles.textoRow}>
          <Icon name="envelope" size={24} style={styles.icon} />
          <Text style={styles.titulo}>E-mail</Text>
        </View>
        <Text style={styles.valor}>{user.email}</Text>

        <View style={styles.textoRow}>
          <Icon name="phone" size={24} style={styles.icon} />
          <Text style={styles.titulo}>Contato</Text>
        </View>
        <Text style={styles.valor}>{user.telefone}</Text>
      </View>

    </LinearGradient>
  )
}

export default Perfil






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(130, 10, 209)",
  
  },
  imagemContainer: {
    alignSelf: "center", 
    marginTop: 120,
  },

  textoContainer: {
    paddingHorizontal: 60, 
    marginTop: 80, 
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
    color: "white" 
  },
  valor: {
    fontSize: 17,
    color: "white",
    marginBottom: 25,
  },

  textoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    color: 'white',
  },
});
