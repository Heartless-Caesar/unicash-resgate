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
          tabBarInactiveTintColor: "#f5f5f5",
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            header: ({ navigation, route, options }) => (
              <View>
                <View
                  style={{
                    backgroundColor: "#212B4F",
                    padding: 20,
                    height: 100,
                    paddingTop: 30,
                    flexDirection: "row",
                  }}
                >
                  {/* Col 1 */}
                  <View style={{ flex: 1 }}>
                    <MaterialCommunityIcons
                      name="circle"
                      color="#f5f5f5"
                      size={50}
                    />
                  </View>
                  {/* Col 2 */}
                  <View style={{ flex: 3, marginTop: 5 }}>
                    <Text style={{ color: "#f5f5f5" }}>Olá, Usuário</Text>
                    <Text style={{ color: "#f5f5f5" }}>- Curso - </Text>
                  </View>
                  {/* Col 3 */}
                  <View style={{ flex: 1 }}>
                    <MaterialCommunityIcons
                      name="bell"
                      color="white"
                      size={30}
                      style={{ marginTop: 10, marginLeft: 25 }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#212B4F",
                    padding: 10,
                    height: 70,
                  }}
                >
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: "#f5f5f5" }}>Saldo disponível</Text>
                    <View style={{ flexDirection: "row", padding: 5 }}>
                      <MaterialCommunityIcons
                        name="horse-variant"
                        color="#f5f5f5"
                        size={30}
                      />
                      <Text
                        style={{
                          color: "#f5f5f5",
                          marginLeft: 10,
                          fontSize: 20,
                        }}
                      >
                        3.960
                      </Text>
                      <View style={{ marginLeft: 190 }}>
                        <MaterialCommunityIcons
                          name="qrcode"
                          color="#f5f5f5"
                          size={25}
                        />
                      </View>
                    </View>
                  </View>
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
