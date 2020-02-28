import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
class HomeTopSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.headerSrarchContainer}>
        <View style={styles.left}>
          <Text style={styles.leftContext}>首页</Text>
        </View>
        <View style={styles.center}>
          <TextInput
            placeholder="请搜索您需要的内容"
            style={styles.centerContext}
          />
        </View>
        <View style={styles.right}>
          <Text style={styles.rightContext}>搜索</Text>
        </View>
      </View>
    );
  }
}

export default HomeTopSearch;
const styles = StyleSheet.create({
  headerSrarchContainer: {
    backgroundColor: 'tomato',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    marginTop: 20,
    height: 35,
  },
  leftContext: {
    lineHeight: 50,
    color: 'white',
    textAlign: 'center',
  },
  center: {
    flex: 4,
    marginTop: 35,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  centerContext: {
    height: 35,
    color: 'black',
  },
  right: {
    flex: 1,
    marginTop: 20,
    height: 35,
  },
  rightContext: {
    lineHeight: 50,
    color: 'white',
    textAlign: 'center',
  },
});
