import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Foundation, Feather, EvilIcons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Foundation name='home' size={28} />
      <Feather name='search' size={28} />
      <Feather name='play' size={30} />
      <Feather name='shopping-bag' size={28} />
      <EvilIcons name='user' size={40} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    right: 0,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
