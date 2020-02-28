import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  render() {
    // const {id, info} = this.props.route.params;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Detail</Text>
        <Button
          title="导航Video"
          onPress={() => this.props.navigation.navigate('Video')}
        />
        <Button
          title="导航Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default Detail;
