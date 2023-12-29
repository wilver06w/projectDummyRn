
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen';
const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Account"
      component={AccountScreen}options={{
        title: '',
        headerTransparent:true
      }}
      />
    </Stack.Navigator>
  )
}