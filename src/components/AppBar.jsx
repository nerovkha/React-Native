import { ScrollView, StyleSheet, Pressable, View } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { useApolloClient } from '@apollo/client/react';

import theme from '../theme';
import Text from './Text';
import { AUTHORIZED_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
    paddingBottom: 4,
  },
  scrollView: {
    flexDirection: 'row',
  },
  tab: {
    padding: 16,
  },
});

const AppBarTab = ({ children, ...props }) => {
  return (
    <Pressable style={styles.tab} {...props}>
      <Text fontWeight="bold" color="white">
        {children}
      </Text>
    </Pressable>
  );
};

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER, {
    variables: { includeReviews: false },
  });
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const username = data?.me?.username;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <Link to="/" component={AppBarTab}>
          Repositories
        </Link>
        {username && (
          <Link to="/myreviews" component={AppBarTab}>
            My reviews
          </Link>
        )}
        {username ? (
          <AppBarTab onPress={signOut}>Sign out</AppBarTab>
        ) : (
          <Link to="/signin" component={AppBarTab}>
            Sign in
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
