import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.expand}>
        <Header />
        <Home />
        <Footer />
      </SafeAreaView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 30 : 0,
    flex: 1,
  },
  expand: {
    position: 'relative',
    flex: 1,
  },
});
