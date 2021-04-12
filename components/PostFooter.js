import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PostFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.posted}>3 hour ago</Text>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
  },
  posted: {
    color: 'grey',
  },
});
