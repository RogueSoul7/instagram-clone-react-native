import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PostHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.username}>
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/200' }}
        />
        <View style={styles.title}>
          <Text>Username</Text>
          {/* <Text>New York, New York</Text> */}
        </View>
      </View>
      <View style={styles.menu}>
        <MaterialCommunityIcons name='dots-horizontal' size={26} />
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderColor: '#a14ec4',
    borderRadius: 20,
    marginRight: 5,
  },
});
