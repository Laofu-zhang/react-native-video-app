import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

import Hot from '../pages/Video/Hot';
import Recommend from '../pages/Video/Recommend';
import Attention from '../pages/Video/Attention';
import VideoDetail from '../pages/VideoDetail';

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

function VideoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TopTag"
        component={TopTag}
        options={{
          title: '视频',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}
      />
      <Stack.Screen
        name="VideoDetail"
        component={VideoDetail}
        options={{title: '详情'}}
      />
    </Stack.Navigator>
  );
}

export default VideoStack;
