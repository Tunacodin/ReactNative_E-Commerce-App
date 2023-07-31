import React from 'react';
import auth from '@react-native-firebase/auth';

import {View, Text,SafeAreaView} from 'react-native';
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../../../components/Buttons/ButtonSecondary';
import ButtonThird from '../../../../components/Buttons/ButtonThird';
import {navigate} from '../../../Assets/RootNavigation';
import {useState} from 'react';
import Header from '../../../../components/Logos/Header';

const ProfileScreen = () => {
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
        flex: 1,
        backgroundColor: '#F9F5F2',
      }}>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F9F5F2',

          marginTop: 20,
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
    </SafeAreaView>
  );
};

export default ProfileScreen;
