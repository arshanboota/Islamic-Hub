import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from '../screens/HomeScreens';
import TasbihCounter from '../screens/TasbihCounter';
import Donation from '../screens/Donation';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreens">
        <Stack.Screen name="HomeScreens" component={HomeScreens} />
        <Stack.Screen name="TasbihCounter" component={TasbihCounter} />
        <Stack.Screen name="Donation" component={Donation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
