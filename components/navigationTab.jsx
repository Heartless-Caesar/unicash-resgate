import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { BlurView } from "expo-blur";
import Home from "../pages/Home";
import React from "react";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { position: "absolute", backgroundColor: "#232D52" },
          tabBarActiveTintColor: "#f5f5f5",
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <MaterialCommunityIcons
                  name="home-outline"
                  size={size}
                  color={color}
                />
              );
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Catalogo"
          component={Home}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <MaterialCommunityIcons
                  name="cart-plus"
                  size={size}
                  color={color}
                />
              );
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Resgate"
          component={Home}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <MaterialCommunityIcons
                  name="transfer"
                  size={size}
                  color={color}
                />
              );
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Extrato"
          component={Home}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <MaterialCommunityIcons
                  name="file-document-outline"
                  size={size}
                  color={color}
                />
              );
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Ranking"
          component={Home}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return (
                <MaterialCommunityIcons
                  name="ticket"
                  size={size}
                  color={color}
                />
              );
            },
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationTab;
