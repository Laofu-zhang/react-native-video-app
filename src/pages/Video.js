import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Video</Text>
        <Button
          title="导航Detail"
          onPress={() => this.props.navigation.navigate('VideoDetail')}
        />
      </View>
    );
  }
}

export default Video;
