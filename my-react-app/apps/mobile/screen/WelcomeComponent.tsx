import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View ,Text  } from 'react-native';

const WelcomeComponent = ({navigation}) => {
    const animation = useRef(null);
    useEffect(() => {
      // You can control the ref programmatically, rather than using autoPlay
      // animation.current?.play();
    }, []);   
  
    return (
      <View style={styles.animationContainer}>
       <Text>web</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="NEXT"
            onPress={() => {
              navigation.navigate("Home")
            }}
          />
          <Button
            title="NEXT Travel"
            onPress={() => {
              navigation.navigate("HomeTravel")
            }}
          />
          <Button
            title="NEXT Music"
            onPress={() => {
              navigation.navigate("Home Music")
            }}
          />
          <Button
            title="NEXT Food"
            onPress={() => {
              navigation.navigate("HomeFood")
            }}
          />
          <Button
            title="NEXT SHOPING"
            onPress={() => {
              navigation.navigate("HomeShoping")
            }}
          />
        </View>
      </View>
    );
}

export default WelcomeComponent


const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    buttonContainer: {
      paddingTop: 20,
    },
  });