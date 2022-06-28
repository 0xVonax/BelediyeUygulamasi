import React from "react";
import MapView from "react-native-maps";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../Components/Header";

export default function Home() {
  return (
    <View style={styles.Main}>
      <Header ScreenName="Otobüsüm Nerede?" />
      <View style={styles.Map}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.193298,
            longitude: 29.074202,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={styles.SearchBar}>
        <FontAwesome
          style={styles.SearchIcon}
          name="search"
          size={35}
          color="black"
        />
        <Text style={styles.SearchText}>Hat veya Durak İsmi Yazınız...</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Main: {
    display: "flex",
    backgroundColor: "white",
    flex: 1,
  },

  Map: {
    flex: 3.4,
    display: "flex",
    backgroundColor: "white",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  SearchBar: {
    flex: 0.25,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
    border: "solid",
    borderColor: "gray",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  SearchText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  SearchIcon: {
    marginLeft: 15,
  },
});
