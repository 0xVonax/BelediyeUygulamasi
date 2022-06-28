import React from "react";

import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import Header from "../Components/Header";

export default function Locations() {
  return (
    <View style={styles.Main}>
      <Header ScreenName="Online İşlemler" />
      <ImageBackground
        style={{ flex: 1.2 }}
        source={require("../Images/Bursa.jpg")}
      ></ImageBackground>
      <View style={styles.Nav}>
        <Text style={{ fontSize: 17 }}>Online Dolum </Text>
        <Text style={{ fontSize: 17 }}>Online Vize </Text>
        <Text style={{ fontSize: 17 }}>Abonman Yükle </Text>
      </View>

      <View style={styles.Page}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>İşlem Geçmişi</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginBottom: 10,
            }}
          />
          <ScrollView style={styles.scrollView}>
            <View style={styles.Events}>
              <Text style={{ fontSize: 19 }}>Otobüs </Text>
              <Text style={{ fontSize: 19 }}>07/06/2022 </Text>
              <Text style={{ fontSize: 19, color: "red" }}>-13.0 TL </Text>
            </View>
            <View style={styles.Events}>
              <Text style={{ fontSize: 19 }}>Metro </Text>
              <Text style={{ fontSize: 19 }}>07/06/2022 </Text>
              <Text style={{ fontSize: 19, color: "red" }}>-2.5 TL </Text>
            </View>
            <View style={styles.Events}>
              <Text style={{ fontSize: 20 }}>Metro </Text>
              <Text style={{ fontSize: 20 }}>31/05/2022 </Text>
              <Text style={{ fontSize: 20, color: "red" }}>-2.5 TL </Text>
            </View>
            <View style={styles.Events}>
              <Text style={{ fontSize: 20 }}>901</Text>
              <Text style={{ fontSize: 20 }}>31/05/2022 </Text>
              <Text style={{ fontSize: 20, color: "green" }}>+30.00 </Text>
            </View>
            <View style={styles.Events}>
              <Text style={{ fontSize: 19 }}>Otobüs </Text>
              <Text style={{ fontSize: 19 }}>07/06/2022 </Text>
              <Text style={{ fontSize: 19, color: "red" }}>-13.0 TL </Text>
            </View>
            <View style={styles.Events}>
              <Text style={{ fontSize: 19 }}>Metro </Text>
              <Text style={{ fontSize: 19 }}>07/06/2022 </Text>
              <Text style={{ fontSize: 19, color: "red" }}>-2.5 TL </Text>
            </View>
            <View style={styles.Events}>
              <Text style={{ fontSize: 20 }}>Metro </Text>
              <Text style={{ fontSize: 20 }}>31/05/2022 </Text>
              <Text style={{ fontSize: 20, color: "red" }}>-2.5 TL </Text>
            </View>
            <View style={styles.Events}>
              <Text style={{ fontSize: 20 }}>901</Text>
              <Text style={{ fontSize: 20 }}>31/05/2022 </Text>
              <Text style={{ fontSize: 20, color: "green" }}>+30.00 </Text>
            </View>
            <View style={styles.Events}>
              <Text style={{ fontSize: 19 }}>Otobüs </Text>
              <Text style={{ fontSize: 19 }}>07/06/2022 </Text>
              <Text style={{ fontSize: 19, color: "red" }}>-13.0 TL </Text>
            </View>
            <View style={styles.Events}>
              <Text style={{ fontSize: 19 }}>Metro </Text>
              <Text style={{ fontSize: 19 }}>07/06/2022 </Text>
              <Text style={{ fontSize: 19, color: "red" }}>-2.5 TL </Text>
            </View>
            <View style={styles.Events}>
              <Text style={{ fontSize: 20 }}>Metro </Text>
              <Text style={{ fontSize: 20 }}>31/05/2022 </Text>
              <Text style={{ fontSize: 20, color: "red" }}>-2.5 TL </Text>
            </View>
            <View style={[styles.Events, { marginBottom: 8 }]}>
              <Text style={{ fontSize: 20 }}>901</Text>
              <Text style={{ fontSize: 20 }}>31/05/2022 </Text>
              <Text style={{ fontSize: 20, color: "green" }}>+30.00 </Text>
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
  Events: {
    display: "flex",
    flexDirection: "row",
    borderColor: "gray",
    borderRadius: 10,
    justifyContent: "space-between",
    borderWidth: 1,
    flex: 1,
    padding: 10,
    marginTop: 10,
  },
  Nav: {
    borderRadius: 10,
    borderColor: "gray",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    flex: 0.2,
    alignItems: "center",
    padding: 10,
    margin: 15,
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
  text: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
});
