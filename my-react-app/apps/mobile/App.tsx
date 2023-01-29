import { Button, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeComponent from "./screen/WelcomeComponent";
import HomeScreen from "./screen/HomeScreen";

import { RoundButtonMusic } from "@my-workspace/my-ui";
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import PlaylistScreen from "./screen/PlaylistScreen";
import ArtisteScreen from "./screen/ArtisteScreen";


const App = () => {
  const Stack = createStackNavigator();



  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeComponent}></Stack.Screen>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Playlist" component={PlaylistScreen}></Stack.Screen>
          <Stack.Screen name="Artiste" component={ArtisteScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
