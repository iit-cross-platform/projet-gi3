import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

type ImagePositionAbsoluteProps = {
  icon: React.ReactNode;
  source: string;
};
const ImagePositionAbsolute: React.FC<ImagePositionAbsoluteProps> = (props) => {
  const { source, icon } = props;
  return (
    <View
      style={{
        height: 200,
        width: 100,
      }}
    >
      <Image style={{ height: 100, width: 100 }} source={{ uri: source }} />
      {icon}
    </View>
  );
};

export default ImagePositionAbsolute;

const styles = StyleSheet.create({});
