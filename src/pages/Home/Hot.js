import React, {Component} from 'react';
import {View, Text, Button, TouchableHighlight, Alert} from 'react-native';

import ListItem from '../../components/ListItem';

class Hot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [
        {
          title: 'title1',
          info: '1',
          image: ['1', '2', '3'],
        },
        {
          title: 'title2',
          info: '2',
          image: ['1', '2', '3'],
        },
        {
          title: 'title3',
          info: '3',
          image: ['1', '2', '3'],
        },
      ],
    };
  }
  render() {
    const {listItems} = this.state;
    return (
      <View>
        {listItems.map((item, index) => {
          return (
            // <TouchableHighlight key={index}>
            <View key={index}>
              <ListItem
                title={item.title}
                info={item.info}
                image={item.image}
              />
              <Button
                title="点击"
                onPress={() => this.props.navigation.navigate('Detail')}
              />
            </View>

            // </TouchableHighlight>
          );
        })}
      </View>
    );
  }
}

export default Hot;
