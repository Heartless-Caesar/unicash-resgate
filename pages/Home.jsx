import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Ir para Lojas"
        onPress={() => navigation.navigate("Lojas")}
      ></Button>
    </View>
  );
};

export default Home;
