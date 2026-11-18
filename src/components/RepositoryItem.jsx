import { View, Image, StyleSheet } from 'react-native';

import theme from '../theme';
import Text from './Text';
import formatCount from '../utils/format';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 16,
  },
  info: {
    flexShrink: 1,
  },
  languageBadge: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.languageBadge,
    borderRadius: 4,
    marginTop: 8,
    padding: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  stat: {
    alignItems: 'center',
  },
});

const Stat = ({ label, value }) => (
  <View style={styles.stat}>
    <Text fontWeight="bold">{formatCount(value)}</Text>
    <Text color="textSecondary">{label}</Text>
  </View>
);

const RepositoryItem = ({ repository }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repository;

  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.info}>
          <Text fontWeight="bold" fontSize="subheading" platformSpecific>
            {fullName}
          </Text>
          <Text color="textSecondary">{description}</Text>
          <View style={styles.languageBadge}>
            <Text color="white">{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <Stat label="Stars" value={stargazersCount} />
        <Stat label="Forks" value={forksCount} />
        <Stat label="Reviews" value={reviewCount} />
        <Stat label="Rating" value={ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
