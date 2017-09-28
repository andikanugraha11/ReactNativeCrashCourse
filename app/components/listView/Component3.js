import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

const users = [
    {name : 'Andika Nugraha', key : 1},
    {name : 'Fuad Aji Pratomo', key : 2},
    {name : 'Rendy Arifian Puspito', key : 3},
    {name : 'Denny Aditya Pradipta', key : 4}
];


export default class Component3 extends Component {
  constructor(){
    super();
    this.state = {
      textValue : 'Masukan'
    }
  }
  onPress1 = (val) => {
    alert(val)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={users}
            renderItem={({item}) => 
              <TouchableOpacity onPress = {
                  () => {this.onPress1(item.key)}
                }>
                <Text>
                  {item.name}
                </Text>
              </TouchableOpacity>
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent : 'center',
    backgroundColor: '#F4f4f4',
    padding : 15,
    marginBottom : 5
  },
  rowText: {
    flex : 1
  },
  v1: {
    flex : 1,
    backgroundColor : 'teal',
    padding : 10
  },
  v2: {
    flex : 1,
    backgroundColor : 'magenta',
    padding : 10
  },
});

AppRegistry.registerComponent('Component3', () => Component3);
