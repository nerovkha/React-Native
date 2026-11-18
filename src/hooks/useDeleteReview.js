import { useMutation } from '@apollo/client';
import { useApolloClient } from '@apollo/client/react';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW);
  const apolloClient = useApolloClient();

  const deleteReview = async ({ id }) => {
    await mutate({ variables: { id } });
    await apolloClient.resetStore();
  };

  return [deleteReview];
};

export default useDeleteReview;
