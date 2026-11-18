import { FlatList, View, Pressable, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';

import theme from '../theme';
import Text from './Text';
import useMe from '../hooks/useMe';
import ReviewItem from './ReviewItem';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.background,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  deleteButton: {
    borderColor: theme.colors.error,
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  viewButton: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  empty: {
    padding: 16,
  },
});

const ReviewActions = ({ review }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  return (
    <View style={styles.actions}>
      <Pressable
        style={styles.viewButton}
        onPress={() => navigate(`/${review.repository.id}`)}
      >
        <Text color="primary">View repository</Text>
      </Pressable>
      <Pressable
        style={styles.deleteButton}
        onPress={() => deleteReview({ id: review.id })}
      >
        <Text color="error">Delete review</Text>
      </Pressable>
    </View>
  );
};

const MyReviews = () => {
  const { me, fetchMore } = useMe({ includeReviews: true });

  if (!me) {
    return (
      <View style={styles.empty}>
        <Text>You need to be signed in to view your reviews</Text>
      </View>
    );
  }

  const reviews = me.reviews ? me.reviews.edges.map((edge) => edge.node) : [];

  if (reviews.length === 0) {
    return (
      <View style={styles.empty}>
        <Text>You have not reviewed any repositories yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ReviewItem review={item} actions={<ReviewActions review={item} />} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default MyReviews;
