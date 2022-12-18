import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

type CardFoodProps = {
  source: string;
  title: React.ReactNode;
  price: React.ReactNode;
  description?: React.ReactNode;
};

const CardFood: React.FC<CardFoodProps> = (props) => {
  const { title, price, description , source } = props;
  return (
    <View style={{ flex: 1 }}>
      <Text>CardFood</Text>
      <Image
        source={{
          uri: source,
        }}
        style={{ height: 100, width: 100 }}
      ></Image>
      <View style={{flex : 1}}>
        {title}
        {description}

        {price}
      </View>
    </View>
  );
};

export default CardFood;

const styles = StyleSheet.create({});
