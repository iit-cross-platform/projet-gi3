import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type CoverProp = {
  borderRadius: number;
  imageUrl: string;
};

const Cover: React.FC<CoverProp> = (props) => {
  const { borderRadius, imageUrl } = props;
  return (
    <View>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={{ height: 100, width: 100, borderRadius }}
      ></ImageBackground>
    </View>
  );
};

export default Cover;

const styles = StyleSheet.create({});
