import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';

import ProfilePicture from './ProfilePicture';

const ProfileList = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.yourStory}>
        <View style={styles.story}>
          <Image
            style={styles.image}
            source={{ uri: 'https://picsum.photos/200' }}
          />
          <View style={styles.storyAdd}>
            <Text style={styles.plus}>+</Text>
          </View>
        </View>
        <View>
          <Text style={styles.profileName} numberOfLines={1}>
            Your Story
          </Text>
        </View>
      </View>
      <ProfilePicture />
      <ProfilePicture />
      <ProfilePicture />
      <ProfilePicture />
      <ProfilePicture />
    </ScrollView>
  );
};

export default ProfileList;

const styles = StyleSheet.create({
  yourStory: {
    padding: 2,
    marginRight: 5,
    width: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
    marginBottom: 5,
  },
  story: {
    position: 'relative',
  },
  storyAdd: {
    position: 'absolute',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16a5e2',
    borderRadius: 15,
    bottom: 8,
    right: 0,
  },
  plus: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileName: {
    color: '#353535',
  },
});
