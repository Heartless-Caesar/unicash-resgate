import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../pages/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { position: "absolute", backgroundColor: "#232D52" },
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return (
                  <MaterialCommunityIcons
                    name="home-outline"
                    size={size}
                    color={color}
                  />
                );
              }
            },
          }}
        />
        {/* <Tab.Screen name="Catalogo" {component=Home}/> */}
        {/* <Tab.Screen name="Resgate" {component=Home}/> */}
        {/* <Tab.Screen name="Extrato" {component=Home}/> */}
        {/* <Tab.Screen name="Ranking" {component=Home}/> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationTab;
