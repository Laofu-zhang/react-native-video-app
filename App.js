import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppNavigatorContainer from './src/navigate/AppNavigatorContainer';

class App extends Component {
  render() {
    return <AppNavigatorContainer />;
  }
}
export default App;
