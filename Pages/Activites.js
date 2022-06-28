import React from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.Main}>
      <View style={styles.Header}>
        <View style={{ marginRight: "3%", justifyContent: "flex-end" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: "10%" }}>
            Etkinlikler
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
            onPress={() => navigation.navigate("TransportHome")}
            title="Ulaşım"
          />
        </View>
      </View>
      <View style={styles.Page}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Güncel Etkinlikler</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginBottom: 10,
            }}
          />
          <ScrollView style={styles.scrollView}>
            <View style={styles.ActivityBox}>
              <Image
                style={styles.Images}
                source={require("../Images/Esaret.jpeg")}
              />

              <Text style={styles.ActivityText}>Esaret Tiyatrosu</Text>
              <View style={styles.Details}>
                <Button title="Detaylar >" />
              </View>
            </View>
            <View style={styles.ActivityBox}>
              <Image
                style={styles.Images}
                source={require("../Images/DoctorStrange.jpeg")}
              />

              <Text style={styles.ActivityText}>Doctor Strange</Text>
              <View style={styles.Details}>
                <Button title="Detaylar >" />
              </View>
            </View>
            <View style={styles.ActivityBox}>
              <Image
                style={styles.Images}
                source={require("../Images/DenizTekin.jpeg")}
              />

              <Text style={styles.ActivityText}>Deniz Tekin Konseri</Text>
              <View style={styles.Details}>
                <Button title="Detaylar >" />
              </View>
            </View>
            <View style={styles.ActivityBox}>
              <Image
                style={styles.Images}
                source={require("../Images/Highfest.jpeg")}
              />

              <Text style={styles.ActivityText}>Highfest</Text>
              <View style={styles.Details}>
                <Button title="Detaylar >" />
              </View>
            </View>
            <View style={styles.ActivityBox}>
              <Image
                style={styles.Images}
                source={require("../Images/Voleybol.jpeg")}
              />

              <Text style={styles.ActivityText}>Voleybol Uluslar Ligi</Text>
              <View style={styles.Details}>
                <Button title="Detaylar >" />
              </View>
            </View>
            <View style={[styles.ActivityBox, { marginBottom: "5%" }]}>
              <Image
                style={styles.Images}
                source={require("../Images/Mirac.jpeg")}
              />

              <Text style={styles.ActivityText}>Miraç Konseri</Text>
              <View style={styles.Details}>
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
    backgroundColor: "red",
    flex: 1,
  },
  Header: {
    backgroundColor: "white",
    display: "flex",
    flex: 0.175,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "5%",
    paddingTop: 20,
  },
  Page: {
    display: "flex",
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingBottom: "2%",
    width: 280,
  },
  text: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  ActivityBox: {
    backgroundColor: "white",
    flex: 1.5,
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  Images: {
    height: 200,
    width: 220,
    borderRadius: 20,
  },
  Button: {
    marginTop: 5,
  },
  ActivityText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  Details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
