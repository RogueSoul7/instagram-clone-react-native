import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const PostNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <View style={styles.feedback}>
          <Feather name='heart' size={26} />
          <FontAwesome name='comment-o' size={26} />
          <Feather name='send' size={26} />
        </View>
        <View style={styles.bookmark}>
          <Feather name='bookmark' size={26} />
        </View>
      </View>
      <View style={styles.likes}>
        <Text style={styles.like}>979,810 likes</Text>
      </View>
    </View>
  );
};

export default PostNav;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 10,
  },
  feedback: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110,
  },
  bookmark: {
    flexDirection: 'row',
  },
  like: {
    color: '#1e1e1e',
  },
});
