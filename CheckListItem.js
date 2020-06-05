import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckListItem = props => {
  const onTouch = () => {
    const {item, onClick} = props;
    onClick && onClick(item);
  };

  return (
    <TouchableOpacity style={{flexDirection: 'row'}} onPress={onTouch}>
      <Icon
        name={props.isSelected ? 'ios-checkbox-outline' : 'ios-square-outline'}
        size={60}
        color={'pink'}
      />
      <View style={styles.item}>
        <Text>{props.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
// <CheckListItem
//   item={item}
//   onClick={this.addCheck}
//   isSelected={this.state.listSelected[item.id]}
// />
export default CheckListItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
});
