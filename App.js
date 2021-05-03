
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import SignUp from './components/Auth/Signup';
import SignIn from './components/Auth/Login';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Dashboard from './components/Profile/Profile';
import Cards from './components/Cards/Cards';
import Messages from './components/Messages/Messages';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


function Home() {
  return (
      <Tab.Navigator tabBarOptions={{
        labelStyle: { fontSize: 15 },
        style: { backgroundColor: '#90c9c2',  padding: 20 },
       
      }}>
    

       <Tab.Screen  name="Profile"  component={Dashboard}   />
     
        <Tab.Screen name="Swipe"  component={Cards}   />

        <Tab.Screen name="Chat" component={Messages} />
      </Tab.Navigator>
     );
}

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name={'Loading'} component={LoadingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }}/> 
      <Stack.Screen name='Sign Up' component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name='Sign In' component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name={'Dashboard'} component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}