import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>VideoDetail</Text>
      </View>
    );
  }
}

export default VideoDetail;
