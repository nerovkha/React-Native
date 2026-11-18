import { View, StyleSheet } from 'react-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
  },
  rating: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 24,
    width: 48,
    height: 48,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flexShrink: 1,
  },
  date: {
    marginTop: 4,
  },
  text: {
    marginTop: 8,
  },
});

const ReviewItem = ({ review, actions }) => {
  const date = new Date(review.createdAt).toLocaleDateString();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.rating}>
          <Text fontWeight="bold" color="primary">
            {review.rating}
          </Text>
        </View>
        <View style={styles.info}>
          <Text fontWeight="bold" fontSize="subheading">
            {review.user ? review.user.username : review.repository.fullName}
          </Text>
          <Text color="textSecondary" style={styles.date}>
            {date}
          </Text>
          <Text style={styles.text}>{review.text}</Text>
        </View>
      </View>
      {actions}
    </View>
  );
};

export default ReviewItem;
