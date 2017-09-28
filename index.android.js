/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Component1 from './app/components/component1/Component1'; 
// import Component2 from './app/components/component2/Component2'; 
// import Component3 from './app/components/listView/Component3'; 
import Component4 from './app/components/listViewApi/Component4'; 

export default class rnative extends Component {
  render() {
    return (
      <View>
        <Component4 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnative', () => rnative);
