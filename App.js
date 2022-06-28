import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Pages/Home";
import NFC from "./Pages/NFC";
import TransportHomePage from "./Pages/TransportHome";
import Bus from "./Pages/Bus";
import Locations from "./Pages/Locations";
import Online from "./Pages/Online";
import Activities from "./Pages/Activites";

function HomeScreen({ navigation }) {
  return <Home />;
}

function TransportHome({ navigation }) {
  return <TransportHomePage />;
}

function NFCPage({ navigation }) {
  return <NFC />;
}

function BusPage({ navigation }) {
  return <Bus />;
}

function LocationsPage({ navigation }) {
  return <Locations />;
}

function OnlinePage({ navigation }) {
  return <Online />;
}

function ActivitiesPage({ navigation }) {
  return <Activities />;
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="NFC"
        component={NFCPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Bus"
        component={BusPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Locations"
        component={LocationsPage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Online"
        component={OnlinePage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TransportHome"
        component={TransportHome}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Activities"
        component={ActivitiesPage}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
