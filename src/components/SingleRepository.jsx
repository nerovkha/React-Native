import { FlatList, View, Pressable, StyleSheet, Linking } from 'react-native';
import { useNavigate, useParams } from 'react-router-native';

import theme from '../theme';
import Text from './Text';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.background,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: theme.colors.white,
  },
  actionButton: {
    flexGrow: 1,
    borderRadius: 4,
    marginHorizontal: 8,
    padding: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryActions = ({ repository }) => {
  const navigate = useNavigate();

  return (
    <View style={styles.actions}>
      <Pressable
        style={[styles.actionButton, styles.primaryButton]}
        onPress={() => Linking.openURL(repository.url)}
      >
        <Text fontWeight="bold" color="white">
          Open in GitHub
        </Text>
      </Pressable>
      <Pressable
        style={[styles.actionButton, styles.primaryButton]}
        onPress={() => navigate('/review')}
      >
        <Text fontWeight="bold" color="white">
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({ id });

  if (!repository) {
    return null;
  }

  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={
        <View>
          <RepositoryItem repository={repository} />
          <RepositoryActions repository={repository} />
        </View>
      }
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
