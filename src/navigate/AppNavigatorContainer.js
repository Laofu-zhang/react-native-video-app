import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabBar from './TabBar';

function AppNavigatorContainer() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}

export default AppNavigatorContainer;
