import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/Main/HomeScreen';
import LoginScreen from './src/Screens/Login/LoginScreen';
import React from 'react';
import RegisterScreen from './src/Screens/Login/RegisterScreen';
import ForgotPasswordScreen from './src/Screens/Login/ForgotPasswordScreen';
import CreatePasswordScreen from './src/Screens/Login/CreatePasswordScreen';
import ProfileScreen from './src/Screens/Main/ProfileScreen';
import SearchScreen from './src/Screens/Main/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductsCardScreen from './src/Screens/Main/ProductsCardScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      tabBarOptions={{
        showLabel: "false",
        activeTintColor: '#e91e63',
        inactiveTintColor: 'gray',

        style: {
          backgroundColor: 'powderblue',
          bottom:20,
        },

      }}
    >
      <Stack.Screen
        name="ForgotPassword"
        options={{headerShown: false}}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={{headerShown: false}}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="CreatePassword"
        options={{headerShown: false}}
        component={CreatePasswordScreen}
      />
    </Stack.Navigator>
  );
};

function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"
        options={{
        headerShown: false,
        tabBarLabel: 'Anasayfa',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),

      }} component={HomeScreen} />

      <Tab.Screen
        name="Search"
        options={{
          headerShown: false,
         tabBarLabel: 'Ara',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name='search-web' color={color} size={size} />
          ),}}
        component={SearchScreen}
      />
      <Tab.Screen
        name="ProductsCard"
        options={{
          headerShown: false,
         tabBarLabel: 'Sepet',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),}}
        component={ProductsCardScreen}
      />

            

      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarLabel: 'Profil',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeStack"
              options={{headerShown: true}}
          component={HomeStack}
        />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}
