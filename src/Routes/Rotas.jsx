import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import Login from "../Screens/Login";
import Registro from "../Screens/Registro";
import Principal from "../Screens/Principal";
import Perfil from "../Screens/Perfil";
import Favorito from "../Screens/Favorito";
import CadastrarDocumentario from "../Screens/CadastrarDocumentario";
import EsqueceuSenha from "../Screens/EsqueceuSenha";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#12304A",
        tabBarInactiveTintColor: "#fff",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#F39C3A",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            )
          ),
        }}
      />
      <Tab.Screen
        name="Favorito"
        component={Favorito}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ? (
              <Ionicons name="bookmark" size={size} color={color} />
            ) : (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            )
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ? (
              <Ionicons name="person" size={size} color={color} />
            ) : (
              <Ionicons name="person-outline" size={size} color={color} />
            )
          ),
        }}
      />
      <Tab.Screen
        name="CadastrarDocumentario"
        component={CadastrarDocumentario}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            focused ? (
              <Ionicons name="exit" size={size} color={color} />
            ) : (
              <Ionicons name="exit-outline" size={size} color={color} />
            )
          ),
        }}
      />
    </Tab.Navigator>
  );
}

 export default function Rotas() {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false); // Defina como `true` quando o usuário estiver autenticado

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={userLoggedIn ? "TabNavigator" : "Login"}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}

