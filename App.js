import "react-native-gesture-handler";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />

        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
