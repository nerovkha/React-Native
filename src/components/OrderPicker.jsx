import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 8,
  },
});

const OrderPicker = ({ orderBy, onChangeOrder }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={orderBy}
        onValueChange={(value) => onChangeOrder(value)}
      >
        <Picker.Item label="Latest repositories" value="CREATED_AT" />
        <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE" />
        <Picker.Item label="Most reviewed repositories" value="REVIEW_COUNT" />
      </Picker>
    </View>
  );
};

export default OrderPicker;
