import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {title, alt, cover, director, actor} = this.props;
    console.log(this.props);
    return (
      <TouchableHighlight style={styles.listItemContainer}>
        <View style={styles.listItemContent}>
          <View style={styles.listTitle}>
            <Text style={styles.titleContent}>  {title}</Text>
          </View>
          <View style={styles.avatarsContainer}>
            <Image source={{uri: `${cover}`}} style={styles.imageContent} />
          </View>
          <View>
            <Text style={styles.directorStyle}>导演: {director}</Text>
            <Text style={styles.actorStyle}>演员: {actor}</Text>
            <Text style={styles.altStyle}>链接地址：{alt}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  listItemContainer: {
    // height: 100,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 0,
    borderWidth: 0,
    overflow: 'hidden',
  },
  listItemContent: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  listTitle: {
    height: 40,
    paddingVertical: 10,
    // backgroundColor: '#33ccff',
  },
  titleContent: {
    fontSize: 16,
    fontWeight: '800',
    // color: 'white',
  },
  avatarsContainer: {
    width: Dimensions.get('window').width,
    marginVertical: 5,
  },
  imageContent: {
    height: 200,
    width: 150,
  },
  directorStyle: {
    marginTop: 5,
  },
  actorStyle: {
    marginTop: 5,
  },
  altStyle: {
    marginTop: 5,
  },
});
