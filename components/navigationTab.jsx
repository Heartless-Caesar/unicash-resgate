import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
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
            headerShown: true,
            header: ({ navigation, route, options }) => (
              <View
                style={{ backgroundColor: "#212B4F", padding: 20, height: 100 }}
              >
                {/* Col 1 */}
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#f5f5f5" }}>Header Here</Text>
                </View>
                {/* Col 2 */}
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#f5f5f5" }}>Header Here</Text>
                </View>
                {/* Col 3 */}
                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#f5f5f5" }}>Header Here</Text>
                </View>
              </View>
            ),
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
