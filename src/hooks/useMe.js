import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useMe = ({ includeReviews = false, first = 8 } = {}) => {
  const { data, loading, fetchMore, refetch } = useQuery(AUTHORIZED_USER, {
    variables: { includeReviews, first },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.me?.reviews?.pageInfo?.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        includeReviews,
        first,
        after: data.me.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    me: data?.me,
    fetchMore: handleFetchMore,
    loading,
    refetch,
  };
};

export default useMe;
