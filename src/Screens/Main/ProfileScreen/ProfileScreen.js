import React from 'react';
import auth from '@react-native-firebase/auth';

import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../../../components/Buttons/ButtonSecondary';
import ButtonThird from '../../../../components/Buttons/ButtonThird';
import {navigate} from '../../../Assets/RootNavigation';
import {useState} from 'react';
import Header from '../../../../components/Logos/Header';
import FavoriteProducts from '../../../../components/Cards/FavoriteProducts';
import {UserContext} from '../../../Contexts/UserContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({route}) => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!', 'success');
        navigate('LoginStack');
      });
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F9F5F2',
      }}>
      <Header />
      <ScrollView
        style={{
          backgroundColor: '#F9F5F2',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 200,
            borderBottomWidth: 1,
            borderBottomColor: 'darkgrey',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 20,
            }}>
            Hoş Geldiniz
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="account-circle"
              size={100}
              color="darkgrey"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}></MaterialCommunityIcons>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
              }}>
              bostancibasituna58@gmail.com
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            padding: 10,
          }}>
          <TouchableOpacity activeOpacity={0.9}>
            <View
              style={{
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <MaterialCommunityIcons
                name="cart"
                size={24}></MaterialCommunityIcons>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'Poppins-Medium',
                }}>
                Siparişlerim
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.9}>
            <View
              style={{
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <MaterialCommunityIcons
                name="star"
                size={24}
                color="orange"></MaterialCommunityIcons>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'Poppins-Medium',
                }}>
                Favori Ürünlerim
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F9F5F2',

            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'darkblue',
              marginBottom: 20,
            }}>
            Profile Screen
          </Text>

          <ButtonThird yazı="Logout" onPress={logout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
