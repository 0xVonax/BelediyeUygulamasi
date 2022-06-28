import React from "react";
import MapView from "react-native-maps";
import {
  Button,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Header from "../Components/Header";

export default function Locations() {
  return (
    <View style={styles.Main}>
      <Header ScreenName="Konumlar" />
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
        <Text style={styles.SearchText}>Bir yer Arayın...</Text>
      </View>
      <View style={styles.NavBox}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Sizin İçin Önerilen Yerler</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginBottom: 10,
            }}
          />
          <ScrollView style={styles.scrollView}>
            <View style={styles.LocationBox}>
              <Image
                style={styles.Images}
                source={require("../Images/Dobruca.jpeg")}
              />

              <Text style={styles.LocationText}>Dobruca Sosyal Tesisi</Text>
              <View style={styles.Details}>
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign
                  name="star"
                  style={{ marginRight: 10 }}
                  size={25}
                  color="#fcbc06"
                />
                <Button title="Detaylar >" />
              </View>
            </View>
            <View style={styles.LocationBox}>
              <Image
                style={styles.Images}
                source={require("../Images/Hüdavendigar.jpg")}
              />

              <Text style={styles.LocationText}>Hüdavendigar Parkı</Text>
              <View style={styles.Details}>
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign
                  name="star"
                  style={{ marginRight: 10 }}
                  size={25}
                  color="#fcbc06"
                />
                <Button title="Detaylar >" />
              </View>
            </View>
            <View style={styles.LocationBox}>
              <Image
                style={styles.Images}
                source={require("../Images/Gölpark.jpeg")}
              />

              <Text style={styles.LocationText}>Gölpark Sosyal Tesisi</Text>
              <View style={styles.Details}>
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign
                  name="star"
                  style={{ marginRight: 10 }}
                  size={25}
                  color="#fcbc06"
                />
                <Button title="Detaylar >" />
              </View>
            </View>
            <View style={styles.LocationBox}>
              <Image
                style={styles.Images}
                source={require("../Images/KırBahce.jpeg")}
              />

              <Text style={styles.LocationText}>Merinos Kır Bahçesi</Text>
              <View style={styles.Details}>
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign
                  name="star"
                  style={{ marginRight: 10 }}
                  size={25}
                  color="#fcbc06"
                />
                <Button title="Detaylar >" />
              </View>
            </View>
            <View style={styles.LocationBox}>
              <Image
                style={styles.Images}
                source={require("../Images/Muze.jpeg")}
              />

              <Text style={styles.LocationText}>Nilüfer Edebiyat Müzesi</Text>
              <View style={styles.Details}>
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign
                  name="star"
                  style={{ marginRight: 10 }}
                  size={25}
                  color="#fcbc06"
                />
                <Button title="Detaylar >" />
              </View>
            </View>
            <View style={styles.LocationBox}>
              <Image
                style={styles.Images}
                source={require("../Images/EgitimSanat.jpeg")}
              />

              <Text style={[styles.LocationText, { marginBottom: 2 }]}>
                Yüzüncüyıl Sanat Merkezi
              </Text>
              <View style={styles.Details}>
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign name="star" size={25} color="#fcbc06" />
                <AntDesign
                  name="star"
                  style={{ marginRight: 10 }}
                  size={25}
                  color="#fcbc06"
                />
                <Button title="Detaylar >" />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
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
    flex: 2,
    display: "flex",
    backgroundColor: "white",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  NavBox: {
    display: "flex",
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
    width: 280,
  },
  text: {
    fontSize: 22,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  LocationBox: {
    backgroundColor: "white",
    flex: 1.2,
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 5,
    marginBottom: 2,
  },
  Images: {
    height: 175,
    width: 195,
    borderRadius: 20,
  },
  LocationText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  Details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
