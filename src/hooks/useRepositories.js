import { useQuery } from '@apollo/client';
import { REPOSITORIES } from '../graphql/queries';

const useRepositories = ({
  first = 8,
  orderBy = 'CREATED_AT',
  orderDirection = 'DESC',
  searchKeyword = '',
} = {}) => {
  const { data, loading, fetchMore, refetch, result } = useQuery(REPOSITORIES, {
    variables: { first, orderBy, orderDirection, searchKeyword },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repositories?.pageInfo?.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        first,
        orderBy,
        orderDirection,
        searchKeyword,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    refetch,
    result,
  };
};

export default useRepositories;
