import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Instagram</Text>
      </View>
      <View style={styles.nav}>
        <FontAwesome name='plus-square-o' size={26} />
        <Feather name='heart' size={26} />
        <MaterialCommunityIcons name='facebook-messenger' size={26} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    paddingRight: 20,
  },
  logo: {
    padding: 10,
  },
  logoText: {
    fontSize: 25,
  },
  nav: {
    flexDirection: 'row',
    width: '35%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
