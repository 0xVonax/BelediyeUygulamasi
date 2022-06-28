import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Entypo, FontAwesome5, Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.Header}>
      <TouchableOpacity
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={32} color="black" />
        <Text style={styles.Text}>{props.ScreenName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    paddingTop: "8%",
    backgroundColor: "white",
    flex: 0.25,
    paddingLeft: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Text: {
    fontSize: 20,
    color: "black",
    marginLeft: "3%",
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});
