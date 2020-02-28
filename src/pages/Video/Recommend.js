import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>推荐</Text>
        <Button
          title="导航详情"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
    );
  }
}

export default Recommend;
