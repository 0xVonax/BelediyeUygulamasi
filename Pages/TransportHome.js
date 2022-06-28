import React from "react";
import MapView from "react-native-maps";
import {
  Button,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.Main}>
      <View style={styles.Header}>
        <View style={{ marginRight: "3%", justifyContent: "flex-end" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: "10%" }}>
            Ulaşım
          </Text>
        </View>
        <View
          style={{
            marginRight: "3%",
            justifyContent: "flex-end",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={{ marginRight: "4%" }}>
            <Button
              onPress={() => navigation.navigate("Home")}
              title="Ana Sayfa"
            />
          </View>

          <Button
            onPress={() => navigation.navigate("Activities")}
            title="Etkinlikler"
          />
        </View>
      </View>
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: "0.5%",
          top: "11.5%",
          justifyContent: "flex-end",
          paddingRight: "3%",
        }}
      >
        <View style={{ marginLeft: "10%" }}>
          <Button style={{ marginLeft: "5%" }} title="Harita İndir" />
        </View>
        <View style={{ marginLeft: "3%" }}>
          <Button style={{ marginLeft: "5%" }} title="Beni Uyandır" />
        </View>
      </View>
      <View style={styles.SearchBar}>
        <FontAwesome
          style={styles.SearchIcon}
          name="search"
          size={35}
          color="black"
        />
        <Text style={styles.SearchText}>Rota veya Durak Arayın...</Text>
      </View>
      <View style={styles.NavMap}>
        <View style={{ padding: "1%" }}>
          <Button title="Bakiyeniz: 10.43 TL" />
        </View>

        <View style={styles.NavArea}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("Locations")}
          >
            <View style={styles.NavBox}>
              <Entypo name="location" size={60} color="black" />
              <Text style={styles.Text}>Konumlar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("Bus")}
          >
            <View style={styles.NavBox}>
              <FontAwesome5 name="bus" size={60} color="black" />
              <Text style={styles.Text}>Otobüsüm Nerede?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.NavArea}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("NFC")}
          >
            <View style={styles.NavBox}>
              <MaterialCommunityIcons
                name="cellphone-nfc"
                size={60}
                color="black"
              />
              <Text style={styles.Text}>Temassız</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("Online")}
          >
            <View style={styles.NavBox}>
              <MaterialIcons name="payment" size={60} color="black" />
              <Text style={styles.Text}>Online Ödemeler</Text>
            </View>
          </TouchableOpacity>
        </View>
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
  Header: {
    backgroundColor: "white",
    display: "flex",
    flex: 0.65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "5%",
    paddingTop: 20,
  },
  Map: {
    flex: 4,
    display: "flex",
    backgroundColor: "white",
  },
  NavMap: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  NavArea: {
    display: "flex",
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    paddingTop: 10,
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  NavBox: {
    display: "flex",
    flexDirection: "column",
    flex: 1.5,
    backgroundColor: "white",
    marginLeft: 15,
    borderRadius: 15,
    border: "solid",
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  SearchBar: {
    flex: 0.4,
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
  SearchIcon: {
    marginLeft: 20,
  },
  SearchText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  Text: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 7,
  },
});
