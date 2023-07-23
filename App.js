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
import { View,Animated} from 'react-native';
import ProductCardScreen from './src/Screens/Main/ProductCardScreen';
import NotificationScreen from './src/Screens/Main/NotificationScreen';


const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
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
                  ? {
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
                  ? {
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
                  : {
                    
                  }
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
                  ? {
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
                  ? {
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
                  ? {
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
