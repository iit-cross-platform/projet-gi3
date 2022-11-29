import { StyleSheet } from "react-native";
import React from "react";
import { MyButton , CardIIT , CardControl , SliderMusic } from "@my-workspace/my-ui";

import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <MyButton
        bgColor="black"
        isDisabled
        onPress={() => { }}
        text="t neji"
        textColor="white"
      />

<CardIIT
  a="5"
  b="hello"
  colorButton="red"
/>

<CardControl
  durationMusic={1}
  slider={<SliderMusic duration={77} durationMax={100} setDuration={() => {}}/>}
/>
      <Text>
        hello
      </Text>
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
