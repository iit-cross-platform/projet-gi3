import { StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';

type CardTraveProps = {
  source: string;
  description: React.ReactNode;
  title: React.ReactNode;
 
};

const CardTravel: React.FC<CardTraveProps> = (props) => {
  const { source, description, title, adress, star } = props;
  return (
    <View style= {{width : 200}}>
      <Image style={{height : 100, width: 100}} source={{ uri: source }} />
      {title}
      {description}
      
      
    </View>
  );
};

export default CardTravel;

const styles = StyleSheet.create({});
