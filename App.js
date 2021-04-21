import "react-native-gesture-handler";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout"
import Logo from "./assets/119144917-vector-cartoon-character-cute-golden-retriever-puppy-dog-for-design-.jpeg"
import Cards from "./components/Cards/Cards"

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
      <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 20 },
        style: { backgroundColor: 'powderblue' },
    
      }}>
     
 
        <Tab.Screen name="Profile" component={Profile}   />
      
        <Tab.Screen name="Swipe"  component={Cards}   />

        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
      );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* <Stack.Screen  name="Signup" component={Signup} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerLeft: null }}
        /> */}

      <Stack.Screen 
       name="Tindog" 
       component={Home} 
       options={
         {headerLeft: null} 
       }
       
      />
      </Stack.Navigator>



 
    </NavigationContainer>
  );
}

export default App;
