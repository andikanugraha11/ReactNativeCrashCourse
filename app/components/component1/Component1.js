import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class Component1 extends Component {
  constructor(){
    super();
    this.state = {
      name : 'Andika Nugaraha'
    }
  }

  static defaultProps = {
    message : 'Hello there'
  }
  onPress(){
    alert('hehe');
  }
  onPress2(){
    console.log('hehe');
  }
  render() {
    return (
      <View>
        <Text style={{color:'red'}}>
          {this.props.message}
        </Text>
        <Text>
          {this.state.name}
        </Text>
        <View style={styles.container}>
          <TouchableHighlight onPress={this.onPress} style={styles.v1}>
            <View>
              <Text>
                TAB
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity style={styles.v2} onPress={this.onPress2}>
            <View>
              <Text>
                TAB
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('Component1', () => Component1);
