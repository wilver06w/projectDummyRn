
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountNavigation from './AccountNavigator';
import RenderPokeBall from '../components/IconTap';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigator';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favo" component={FavoriteNavigation}
      options={{
        title:"Favoritos",
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        }}
        />
  <Tab.Screen name="Poke" component={PokedexNavigation}
  options={{
    tabBarLabel:"",
    tabBarIcon: () => <RenderPokeBall/>,
}}/>
<Tab.Screen name="Acc" component={AccountNavigation}
       options={{
        title:"Mi cuenta",
        tabBarLabel: 'Mi cuenta',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
/>
    </Tab.Navigator>
  )
}
