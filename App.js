import { StatusBar } from 'expo-status-bar';
import config from './config'
import React from 'react';
import * as firebase from 'firebase'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from './components/auth/Home'

const Stack = createStackNavigator();
const firebaseConfig = {
  apiKey: config.API_KEY ,
  authDomain: "instaclone-7fa62.firebaseapp.com",
  projectId: "instaclone-7fa62",
  storageBucket: "instaclone-7fa62.appspot.com",
  messagingSenderId: "300048697319",
  appId: config.APP_ID,
  measurementId: "G-7DGJXGWS8W"
};

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName = "Home">
       <Stack.Screen name = "Home"   component = {Homescreen} options= {{headerShown: false}}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

