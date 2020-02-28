import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Mine from '../pages/Mine';
import HomeStack from './HomeStack';
import VideoStack from './VideoStack';

function TabBar() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: '首页',
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoStack}
        options={{
          tabBarLabel: '视频',
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          tabBarLabel: '我的',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBar;
