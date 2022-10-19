import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={TabBarStyle.container}>
      <View>
        <Icon name="home-outline" size={30} color="#f5f5f5" />
      </View>
      <View>
        <Icon name="cart-plus" size={30} color="#f5f5f5" />
      </View>
      <View>
        <Icon name="transfer" size={30} color="#f5f5f5" />
      </View>
      <View>
        <Icon name="file-document-outline" size={30} color="#f5f5f5" />
      </View>
      <View>
        <Icon name="ticket" size={30} color="#f5f5f5" />
      </View>
    </View>
  );
};

export default TabBar;
