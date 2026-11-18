import { useState } from 'react';
import { FlatList, View, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import OrderPicker from './OrderPicker';
import SearchBar from './SearchBar';

export const RepositoryListContainer = ({
  repositories,
  onEndReach,
  searchKeyword,
  onChangeSearch,
  orderBy,
  onChangeOrder,
  navigateToRepository,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigateToRepository(item.id)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      ListHeaderComponent={
        <View>
          <SearchBar searchKeyword={searchKeyword} onChangeSearch={onChangeSearch} />
          <OrderPicker orderBy={orderBy} onChangeOrder={onChangeOrder} />
        </View>
      }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [searchKeyword, setSearchKeyword] = useState('');
  const { repositories, fetchMore } = useRepositories({
    orderBy,
    orderDirection: 'DESC',
    searchKeyword,
  });
  const navigate = useNavigate();

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={fetchMore}
      searchKeyword={searchKeyword}
      onChangeSearch={setSearchKeyword}
      orderBy={orderBy}
      onChangeOrder={setOrderBy}
      navigateToRepository={(id) => navigate(`/${id}`)}
    />
  );
};

export default RepositoryList;
