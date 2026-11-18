import { TextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  searchBar: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.white,
  },
});

const SearchBar = ({ searchKeyword, onChangeSearch }) => {
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="Search repositories"
      value={searchKeyword}
      onChangeText={onChangeSearch}
    />
  );
};

export default SearchBar;
