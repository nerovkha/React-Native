import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client/react';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
