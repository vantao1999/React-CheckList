/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';
// import CheckListItem from './CheckListItem';

const data = [
  {
    id: 111111,
    name: 'Section A',
    data: [
      {id: 1, name: 'Item 1'},
      {id: 2, name: 'item2'},
      {id: 3, name: 'item3'},
    ],
  },
  {
    id: 222222,
    name: 'Section B',
    data: [
      {id: 4, name: 'Item A'},
      {id: 5, name: 'item B'},
      {id: 6, name: 'Item C'},
    ],
  },
  {
    id: 333333,
    name: 'Section C',
    data: [
      {id: 7, name: 'Item 1'},
      {id: 8, name: 'item 2'},
      {id: 9, name: 'item 3'},
    ],
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSelected: {
        // sectionId:{
        //   itemId: value,
        //   ...
        // },
        // ...
      },
      sectionSelected: {},
    };
  }

  checkAll = section => {
    console.log('2222', section);
    const {listSelected} = this.state;
    const sectionData = section.data[0];
    console.log('sectionData', sectionData);

    if (_.isEmpty(listSelected[sectionData.id])) {
      _.map(sectionData.data, item => {
        _.setWith(listSelected, [sectionData.id, item.id], true, Object);
      });
    } else {
      const dataSize = sectionData.data.length;
      const listArr = _.filter(listSelected[section.data[0].id], item => item);
      if (listArr.length >= dataSize) {
        listSelected[sectionData.id] = {};
      } else {
        _.map(sectionData.data, item => {
          _.setWith(listSelected, [sectionData.id, item.id], true, Object);
        });
      }
    }

    this.setState({listSelected});
  };

  checkItem = (sectionId, itemId) => {
    const {listSelected} = this.state;
    const itemSelected = _.get(listSelected, [sectionId, itemId], null);
    if (!itemSelected) {
      _.setWith(listSelected, [sectionId, itemId], true, Object);
    } else {
      _.setWith(listSelected, [sectionId, itemId], !itemSelected, Object);
    }
    this.setState({listSelected});
  };

  renderItem = ({item}) => {
    const {listSelected} = this.state;
    return (
      <View>
        {_.map(item.data, elm => (
          <TouchableOpacity
            style={{flexDirection: 'row', marginLeft: 40}}
            onPress={() => this.checkItem(item.id, elm.id)}>
            <Icon
              name={
                listSelected[item.id] && listSelected[item.id][elm.id]
                  ? 'ios-checkbox-outline'
                  : 'ios-square-outline'
              }
              size={60}
              color={'pink'}
            />
            <View style={styles.item}>
              <Text>{elm.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  renderSectionHeader = ({section}) => {
    const {listSelected} = this.state;
    const dataSize = section.data[0].data.length;
    const listArr = _.filter(listSelected[section.data[0].id], item => item);

    return (
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => this.checkAll(section)}>
        <Icon
          name={
            listArr.length >= dataSize
              ? 'ios-checkbox-outline'
              : 'ios-square-outline'
          }
          size={60}
          color="green"
        />
        <Text style={styles.header}>{section.name}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    const configData = _(data)
      .groupBy(item => item.name)
      .map((value, key) => ({name: key, data: value}))
      .value();

    console.log('sectionSelected', this.state.listSelected);
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={configData}
          keyExtractor={(item, index) => {
            return index;
          }}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
        />
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  header: {
    fontSize: 32,
    flex: 1,
    backgroundColor: 'green',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 24,
  },
});
