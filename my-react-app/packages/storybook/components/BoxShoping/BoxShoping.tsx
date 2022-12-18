import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type BoxShopingProps = {
  source: string;
  icon: React.ReactNode;
  description: React.ReactNode;
};

const BoxShoping: React.FC<BoxShopingProps> = (props) => {
  const { source, icon, description } = props;
  return (
    <View>
      <ImageBackground source={{ uri: source }} style={{ height: 200, width: 200 }}>
        {icon}
      </ImageBackground>
      <Text>BoxShoping</Text>
    </View>
  );
};

export default BoxShoping;

const styles = StyleSheet.create({});
