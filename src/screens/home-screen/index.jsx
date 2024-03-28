import {Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {homeStyle} from './style';

const HomeScreen = () => {
  return (
    <SafeAreaView style={homeStyle.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
