import { Button, StyleSheet, View, Text } from "react-native";
import React from "react";

import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import WelcomeComponent from "./screen/WelcomeComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screen/HomeScreen";
const App = () => {
  const Stack = createStackNavigator();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeComponent} />
          <Stack.Screen name="Home" component={HomeScreen} />

        </Stack.Navigator>

      </NavigationContainer>

    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
