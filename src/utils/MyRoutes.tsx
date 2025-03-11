import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllUserScreen from '../modules/AllUserScreen/AllUserScreen';
import UserScreen from '../modules/UserScreen/UserScreen';

const Stack = createNativeStackNavigator();

export const MyRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="All Users" component={AllUserScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};