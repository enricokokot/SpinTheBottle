import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HotDice from './HotDice';
import LiarsDice from './LiarsDice';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarStyle: {display: 'none'}}}>
        <Tab.Screen name="LiarsDice" component={LiarsDice} />
        {/* <Tab.Screen name="HotDice" component={HotDice} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
