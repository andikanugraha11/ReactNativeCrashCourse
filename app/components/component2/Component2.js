import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class Component2 extends Component {
  constructor(){
    super();
    this.state = {
      textValue : 'Masukan'
    }
  }

  onChangeTxt(value){
      this.setState({
          textValue : value
      });
  }

  onPressLearnMore = () =>{
      alert(this.state.textValue)
  }

  render() {
    return (
      <View>
        <TextInput 
            value = {this.state.textValue}
            placeholder = "Masukan Text"
            onChangeText = {(value) => {this.onChangeTxt(value)}}
        />
        
        <Text>
            {this.state.textValue}
        </Text>
        <Button
            onPress={this.onPressLearnMore}
            title="Learn More"
            color="teal"
            accessibilityLabel="Learn more about this purple button"
        />
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

AppRegistry.registerComponent('Component2', () => Component2);
