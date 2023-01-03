import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';

type RoundButtonMusicProps = {
  backgroundColor: string;
  icon: React.ReactNode;
  onClickButton: () => void;
  size?: number | 50;
};

const RoundButtonMusic: React.FC<RoundButtonMusicProps> = (props) => {
  const { backgroundColor, icon, onClickButton, size } = props;

  const onPressButton = () => {
    onClickButton();
  };
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.roundButton,
          {
            backgroundColor,
            height: size,
            width: size,
          },
        ]}
        onPress={onPressButton}
      >
        {icon}
      </TouchableOpacity>
    </View>
  );
};

export default RoundButtonMusic;

const styles = StyleSheet.create({
  roundButton: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
