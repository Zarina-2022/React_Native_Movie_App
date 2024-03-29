import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screen import
import HomeScreen from '../screens/home-screen';
import MovieDetail from '../screens/detail-screen';
import PersonScreen from '../screens/person-screen';
import SearchScreen from '../screens/search-screen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Movie"
          component={MovieDetail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Person"
          component={PersonScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Search"
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
