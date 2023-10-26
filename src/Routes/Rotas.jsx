import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Login from "../Screens/Login";
import Registro from "../Screens/Registro";
import Principal from "../Screens/Principal";
import Perfil from "../Screens/Perfil";
import Favorito from "../Screens/Favorito";
import CadastrarDocumentario from "../Screens/CadastrarDocumentario";
import DetalheDocumentario from "../Screens/DetalheDocumentario";
import GerenciamentoDocumentario from "../Screens/GerenciamentoDocumentario";

const Tab = createBottomTabNavigator();

const isAdmin = true;

function TabNavigator() {
  

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "rgb(73 4 118)",
        tabBarInactiveTintColor: "rgb(73 4 118)",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "rgb(249 249 249)",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Favorito"
        component={Favorito}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="bookmark" size={size} color={color} />
            ) : (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            ),
        }}
      />
      {isAdmin && (
        <Tab.Screen
          name="GerenciamentoDocumentario"
          component={GerenciamentoDocumentario}
          options={{
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <Ionicons name="settings" size={size} color={color} />
              ) : (
                <Ionicons name="settings-outline" size={size} color={color} />
              ),
          }}
        />
      )}
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="person" size={size} color={color} />
            ) : (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
        }}
      />
      {/* <Tab.Screen
        name="Logout"
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="exit" size={size} color={color} />
            ) : (
              <Ionicons name="exit-outline" size={size} color={color} />
            ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default function Rotas() {
  const Stack = createStackNavigator();
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={userLoggedIn ? "TabNavigator" : "Login"}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen
        name="DetalheDocumentario"
        component={DetalheDocumentario}
      />
    </Stack.Navigator>
  );
}
