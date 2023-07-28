import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  useWindowDimensions,
} from 'react-native';
import Input from '../../../components/Input/Input';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../../components/Buttons/ButtonSecondary';
import ButtonThird from '../../../components/Buttons/ButtonThird';
import { UserContext } from '../../Contexts/UserContext';
import {navigate} from '../../Assets/RootNavigation';



const LoginScreen = () => {


  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F9F5F2',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Image
          resizeMode="contain"
          source={require('../../Images/Logo.png')}
          style={{width: '85%', height: '20%'}}
        />

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Input
            placeholder="Kullanıcı Adı"
            value={username}
            onChangeText={setUsername}
            
          />

          <Input  placeholder="Şifre" value={password} onChangeText={setPassword} />
        </View>

    
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <ButtonPrimary
            yazı="Giriş Yap"
            onPress={() => {
              navigate('HomeStack', { username })
            
              }}
          />
          <ButtonThird yazı="Google ile Devam Et" />
          <ButtonSecondary
            onPress={() => navigate('Register')}
            yazı="Henüz bir hesabın yok mu?"
          />
          <ButtonSecondary
            onPress={() => navigate('ForgotPassword')}
            yazı="Şifremi unuttum"
          />

        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
