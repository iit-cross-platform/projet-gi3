import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

type CardFoodProps = {
  title: React.ReactNode;
  price: React.ReactNode;
  description?: React.ReactNode;
};

const CardFood: React.FC<CardFoodProps> = (props) => {
  const { title, price, description } = props;
  return (
    <View style={{ flex: 1 }}>
      <Text>CardFood</Text>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg',
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
