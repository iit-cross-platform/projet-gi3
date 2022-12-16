import { StyleSheet } from "react-native";
import React from "react";
import { MyButton , UpNextButton } from "@my-workspace/my-ui";

import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import WelcomeComponent from "./screen/WelcomeComponent";

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <WelcomeComponent></WelcomeComponent>
      <MyButton
        bgColor="black"
        isDisabled
        onPress={() => { }}
        text="Hello Test"
        textColor="white"
      />
      <Text>
        hello
      </Text>

      <UpNextButton
  backgroundColor="red"
  borderRadius="10"
  text="Hello"
  textColor="#562c2c"
  type="link"
/>
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
