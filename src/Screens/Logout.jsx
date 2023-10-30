import React, { useEffect, useCallback } from 'react';
import { View, Alert, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";

const Logout = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const showLogoutAlert = useCallback(() => {
    Alert.alert(
      'Confirmar',
      'Tem certeza de que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: () => {
            navigation.navigate('Principal');
          },
        },
        {
          text: 'Confirmar',
          onPress: async () => {
            await AsyncStorage.removeItem('token'); 
            await AsyncStorage.removeItem('usuario'); 

            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false }
    );
  }, [navigation]);

  useEffect(() => {
    if (isFocused) {
      showLogoutAlert();
    }
  }, [isFocused, showLogoutAlert]);




  return (
    <LinearGradient
    colors={[
        "rgba(50, 0, 64, 1)",
        "rgba(97, 9, 121, 1)",
        "rgba(143, 32, 173, 1)",
      ]}
      style={styles.container}
    >
      <View style={styles.content}>
      </View>
    </LinearGradient>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logout;
