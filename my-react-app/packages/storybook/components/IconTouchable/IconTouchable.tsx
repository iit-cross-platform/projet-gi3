import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type IconTouchableProps = {
  icon: React.ReactNode;
  onClick: () => void;
};

const IconTouchable: React.FC<IconTouchableProps> = (props) => {
  const { icon, onClick } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconTouchable;

const styles = StyleSheet.create({});
