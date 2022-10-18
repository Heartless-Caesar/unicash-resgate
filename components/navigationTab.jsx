import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" {component=Home}/> */}
        {/* <Tab.Screen name="Catalogo" {component=Home}/> */}
        {/* <Tab.Screen name="Resgate" {component=Home}/> */}
        {/* <Tab.Screen name="Extrato" {component=Home}/> */}
        {/* <Tab.Screen name="Ranking" {component=Home}/> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationTab;
