import { Button, StyleSheet , View , Text} from "react-native";
import React from "react";
import { MyButton , UpNextButton , CardFood } from "@my-workspace/my-ui";

import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import WelcomeComponent from "./screen/WelcomeComponent";

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <WelcomeComponent></WelcomeComponent>
  <CardFood
  description={<Text style={{color: 'black'}}>test</Text>}
  price={<View style={{flex :  1 , flexDirection : 'row', height: 50}}><Text style={{color: 'black'}}>{' '}test{' '}</Text><Button title="+"  /></View>}
  title={<Text style={{color: 'black'}}>test</Text>}
/>
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
