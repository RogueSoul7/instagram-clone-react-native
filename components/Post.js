import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import PostHeader from './PostHeader';
import PostNav from './PostNav';
import PostComment from './PostComment';
import PostFooter from './PostFooter';

const Post = () => {
  return (
    <View>
      <PostHeader />
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/200' }}
      />
      <PostNav />
      <PostComment />
      <PostFooter />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  image: {
    height: 500,
    width: '100%',
    marginRight: 5,
  },
});
