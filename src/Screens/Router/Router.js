import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import HomeScreen from '../Main/HomeScreen/HomeScreen';
import SearchScreen from '../Main/CategoryScreen/CategoryScreen';
import ProductCardScreen from '../Main/CartScreen/ProductCardScreen';
import NotificationScreen from '../Main/NotificationScreen/NotificationScreen';
import ProfileScreen from '../Main/ProfileScreen/ProfileScreen';
import RegisterScreen from '../Login/RegisterScreen';
import LoginScreen from '../Login/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from '../../Assets/RootNavigation';
import Toast from 'react-native-toast-message';

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
};
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
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#fff',
          borderTopWidth: 0,
          shadowOffset: {width: 5, height: 5},
          shadowColor: '#000',
          shadowOpacity: 0.8,
          elevation: 5,
          bottom: 5,
          height: 60,
          borderRadius: 20,
          marginHorizontal: 10,
          padding: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Anasayfa',

          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 5,
            fontFamily: 'Poppins-Regular',
          },
          tabBarIcon: ({focused}) => (
            <View style={focused ? focusedStyle : {}}>
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
        name="Category"
        options={{
          tabBarLabel: 'Kategori',

          tabBarLabelStyle: {
            fontSize: 16,
            marginBottom: 5,
            fontFamily: 'Poppins-Regular',
          },
          tabBarIcon: ({focused}) => (
            <View style={focused ? focusedStyle : {}}>
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
          tabBarLabel: 'Sepet',
          tabBarLabelStyle: {
            fontSize: 16,
            marginBottom: 5,
            fontFamily: 'Poppins-Regular',
          },
          tabBarIcon: ({focused}) => (
            <View style={focused ? focusedStyle : {}}>
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
        name="Notifications"
        options={{
          tabBarLabel: 'Bildirimler',

          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 5,
            fontFamily: 'Poppins-Regular',
          },
          tabBarIcon: ({focused}) => (
            <View style={focused ? focusedStyle : {}}>
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
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 16,
            marginBottom: 5,
            fontFamily: 'Poppins-Regular',
          },

          tabBarIcon: ({focused}) => (
            <View style={focused ? focusedStyle : {}}>
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
      <Stack.Navigator initialRouteName="HomeStack">
        <Tab.Screen
          name="LoginStack"
          component={LoginStack}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
