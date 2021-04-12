import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/200' }}
      />
      <View style={styles.profileName}>
        <Text numberOfLines={1}>Username</Text>
      </View>
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    width: 90,
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: '#a14ec4',
    borderRadius: 40,
    marginBottom: 5,
  },
  profileName: {
    alignItems: 'center',
  },
});
