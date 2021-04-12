import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ProfileList from '../components/ProfileList';
import Post from '../components/Post';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.profiles}>
          <ProfileList />
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.feed}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profiles: {
    marginBottom: 5,
  },
});
