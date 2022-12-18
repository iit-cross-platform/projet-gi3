import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type RoundButtonMusicProps = {
  backgroundColor: string;
  icon: React.ReactNode;
  onClickButton: () => void;
};

const RoundButtonMusic: React.FC<RoundButtonMusicProps> = (props) => {
  const { backgroundColor, icon, onClickButton } = props;

  const OnPressButton = () => {
    onClickButton();
  };
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.roundButton,
          {
            backgroundColor,
          },
        ]}
        onPress={OnPressButton}
      >
        {icon}
      </TouchableOpacity>
    </View>
  );
};

export default RoundButtonMusic;

const styles = StyleSheet.create({
  roundButton: {
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
