import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
} from "react-native";

import Header from "../Components/Header";

export default function NFC() {
  return (
    <View style={styles.Main}>
      <Header ScreenName="Temassız" />
      <View style={styles.Page}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Toplu Taşıma</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginBottom: 5,
            }}
          />
          <ScrollView style={styles.scrollView}>
            <View style={styles.TicketBox}>
              <Image
                style={styles.Images}
                source={require("../Images/QR.png")}
              />
              <Text style={styles.TicketText}>Kod Okut</Text>
              <View style={styles.Details}>
                <Button title="Git >" />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={styles.Page}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Biletlerim</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginBottom: 10,
            }}
          />
          <ScrollView style={styles.scrollView}>
            <View style={styles.TicketBox}>
              <Image
                style={styles.Images}
                source={require("../Images/Expo.jpeg")}
              />

              <Text style={styles.TicketText}>Expo</Text>
              <View style={styles.Details}>
                <Button title="Biletim >" />
              </View>
            </View>
            <View style={styles.TicketBox}>
              <Image
                style={styles.Images}
                source={require("../Images/DoctorStrange.jpeg")}
              />

              <Text style={styles.TicketText}>Doctor Strange</Text>
              <View style={styles.Details}>
                <Button title="Biletim >" />
              </View>
            </View>
            <View style={styles.TicketBox}>
              <Image
                style={styles.Images}
                source={require("../Images/Esaret.jpeg")}
              />

              <Text style={styles.TicketText}>Esaret Tiyatrosu</Text>
              <View style={styles.Details}>
                <Button title="Biletim >" />
              </View>
            </View>
            <View style={[styles.TicketBox, { marginBottom: "5%" }]}>
              <Image
                style={styles.Images}
                source={require("../Images/DenizTekin.jpeg")}
              />

              <Text style={[styles.TicketText, { marginBottom: "5%" }]}>
                Deniz Tekin
              </Text>
              <View style={styles.Details}>
                <Button title="Biletim >" />
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
    width: 280,
  },
  TicketBox: {
    backgroundColor: "white",
    flex: 0.5,
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    padding: 9,
    marginTop: 7,
  },
  text: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  Images: {
    height: 205,
    width: 220,
    borderRadius: 10,
  },
  TicketText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
