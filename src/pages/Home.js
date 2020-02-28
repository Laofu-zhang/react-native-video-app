import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import Detail from './Detail';
import Video from './Video';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home</Text>
        <Button
          title="导航Detail"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
        <Button
          title="导航Video"
          onPress={() => this.props.navigation.navigate('Video')}
        />
      </View>
    );
  }
}

export default Home;
