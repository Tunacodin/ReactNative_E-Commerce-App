import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import HomeScreen from '../Main/HomeScreen';
import SearchScreen from '../Main/SearchScreen';
import ProductCardScreen from '../Main/ProductCardScreen';
import NotificationScreen from '../Main/NotificationScreen';
import ProfileScreen from '../Main/ProfileScreen';
import ForgotPasswordScreen from '../Login/ForgotPasswordScreen';
import CreatePasswordScreen from '../Login/CreatePasswordScreen';
import RegisterScreen from '../Login/RegisterScreen';
import LoginScreen from '../Login/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from '../../Assets/RootNavigation';





const focusedStyle = {
                 position: 'absolute',
                      top: -30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      shadowOffset: {width: 5, height: 3},
                      shadowColor: '#000',
                      shadowOpacity: 0.5,
                      elevation: 5,
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{headerShown: false}}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="CreatePassword"
        options={{headerShown: false}}
        component={CreatePasswordScreen}
      />
      <Stack.Screen
        name="Register"
        options={{headerShown: false}}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#fff',
          borderTopWidth: 0,
          shadowOffset: {width: 5, height: 3},
          shadowColor: '#000',
          shadowOpacity: 0.5,
          elevation: 5,
          bottom: 10,
          height: 60,
          borderRadius: 20,
          marginHorizontal: 10,
          padding: 5,
        },
      }}>
      <Tab.Screen
        name="Anasayfa"
        options={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
            fontFamily: 'cursive',
          },
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused
                   ?
                      focusedStyle
                  : {}
              }>
              <MaterialCommunityIcons
                name="home"
                color={focused ? '#e91e63' : 'gray'}
                size={focused ? 30 : 25}
              />

              
            </View>
          ),
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Kategori"
        options={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
            fontFamily: 'cursive',
          },
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused
                          ?
                        focusedStyle
                  : {}
              }>
              <MaterialCommunityIcons
                name="dots-grid"
                color={focused ? '#e91e63' : 'gray'}
                size={focused ? 30 : 25}
              />
            </View>
          ),
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="ProductCard"
        options={{
          title: 'Sepet',
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
            fontFamily: 'cursive',
          },
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused
                          ? 
                        focusedStyle
                  : {}
              }>
              <MaterialCommunityIcons
                name="cart"
                color={focused ? '#e91e63' : 'gray'}
                size={focused ? 30 : 25}
              />
            </View>
          ),
        }}
        component={ProductCardScreen}
      />
      <Tab.Screen
        name="Notification"
        options={{
          title: 'Bildirimler',
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
            fontFamily: 'cursive',
          },
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused
                          ?
                        focusedStyle
                  : {}
              }>
              <MaterialCommunityIcons
                name="bell"
                color={focused ? '#e91e63' : 'gray'}
                size={focused ? 30 : 25}
              />
            </View>
          ),
        }}
        component={NotificationScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
            fontFamily: 'cursive',
          },
          tabBarLabel: 'Hesabım',
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused
                          ?
                        focusedStyle
                  : {}
              }>
              <MaterialCommunityIcons
                name="account"
                color={focused ? '#e91e63' : 'gray'}
                size={focused ? 30 : 25}
              />
            </View>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

// Stack Navigator for Login Screen and Home Screen

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginStack"
          options={{headerShown: false}}
          component={LoginStack}
        />

        <Stack.Screen
          name="HomeStack"
          options={{headerShown: false}}
          component={HomeStack}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router
