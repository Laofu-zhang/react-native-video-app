import React, {Component, useRef} from 'react';
import {TextInput, View, Button, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {BlurView} from 'expo-blur';

import Detail from '../pages/Detail';
import Recommend from '../pages/Home/Recommend';
import Attention from '../pages/Home/Attention';
import Hot from '../pages/Home/Hot';
import HomeTopSearch from '../components/HomeTopSearch';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TopTag() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Recommend"
        component={Recommend}
        options={{title: '推荐'}}
      />
      <Tab.Screen
        name="Attention"
        component={Attention}
        options={{title: '关注'}}
      />
      <Tab.Screen name="Hot" component={Hot} options={{title: '热点'}} />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TopTag"
        component={TopTag}
        options={{
          title: '首页',
          headerStyle: {backgroundColor: 'tomato', height: 80},
          header: ({scene, previous, navigation}) => {
            return <HomeTopSearch />;
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{title: '详情'}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;

// const styles = StyleSheet.create({
//   homeHeaderBg: {
//     backgroundColor: 'red',
//   },
// });
