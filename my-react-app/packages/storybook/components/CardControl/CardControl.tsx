import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type CardControlProps = {
  durationMusic: number;
  slider: React.ReactNode;
};
const CardControl: React.FC<CardControlProps> = (props) => {
  const { durationMusic, slider } = props;

  return (
    <View>
      <Text>CardControl</Text>
      <Text>{durationMusic}</Text>
      {slider}
    </View>
  );
};

export default CardControl;

const styles = StyleSheet.create({});
