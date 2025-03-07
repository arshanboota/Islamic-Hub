import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TasbihCounter from '../screens/TasbihCounter';
import Donation from '../screens/Donation';
import HomeScreens from '../screens/HomeScreens';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
      }}
    >
     <Tab.Screen name="TasbihCounter" 
      component={TasbihCounter} 
      options={{ headerShown: false ,
      tabBarIcon: () => (
      <Image
              source={require('../assets/images/Quran.jpeg')}
              style={{ width: 27, height: 27, }}
            />
       ),}} />
      <Tab.Screen name="HomeScreens"
       component={HomeScreens}
       options={{headerShown: false,
      tabBarIcon: () => (
      <Image
              source={require('../assets/images/home.jpeg')}
              style={{  width: 34, height: 34, }}
            />
       ),
      }}  />

      <Tab.Screen name="Donation" component={Donation} options={{ headerShown: false , tabBarIcon: () => (
      <Image
              source={require('../assets/images/don.png')}
              style={{  width: 27, height: 27, }}
            />
       ),}} />
    </Tab.Navigator>
  );
};
export default BottomTabs;