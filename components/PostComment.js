import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const PostComment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.comments}>
        <View style={styles.user}>
          <Text style={styles.username}>Username</Text>
        </View>
        <View style={styles.comment}>
          <Text>That looks fun!! 👍</Text>
        </View>
      </View>
      <View style={styles.moreComment}>
        <Text style={styles.allComment}>View all 5 comments</Text>
      </View>
      <View style={styles.postComment}>
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/200' }}
        />
        <View style={styles.userCommentInput}>
          <Text style={styles.addComment}>Add a comment...</Text>
          <View style={styles.emoji}>
            <Text>❤</Text>
            <Text>🙌</Text>
            <EvilIcons name='plus' size={26} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostComment;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
    paddingBottom: 5,
  },
  comments: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  moreComment: {
    marginBottom: 5,
  },
  allComment: {
    color: 'grey',
  },
  postComment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#a14ec4',
    borderRadius: 15,
    marginRight: 5,
  },
  userCommentInput: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  addComment: {
    color: 'grey',
  },
  emoji: {
    flexDirection: 'row',
    width: 85,
    justifyContent: 'space-between',
  },
});
