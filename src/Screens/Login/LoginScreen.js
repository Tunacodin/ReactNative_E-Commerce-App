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
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {navigate} from '../Router/RootNavigation';



const LoginScreen = ({navigation}) => {


  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');

  //default olarak type= "error verdik" sadece değiştirmek istediğimiz zaman type ı değiştireceğiz

  const showToast = (text, type = 'error') => {
    Toast.show({
      type: type,
      text2: text,
    });
  };

  const _handleSignupPress = () => {

    if (username) {

      if (validateEmail(email)) {

        // least 6 char
        if (password) {

          if (password.length >= 6) {

            auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                console.log('User account created & signed in!');

                showToast("Kullanıcı Oluşturuldu", "success");

                navigate("Login");
              })
              .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');

                  showToast("E-mail adresi zaten kullanılıyor");
                }

                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid');
                  showToast("Geçersiz e-mail");
                }

                console.error(error);
              });

          } else {
            // show password alert !
            showToast("Parola en az 6 karakter olmalı");
          }

        } else {
          // show password alert !
          showToast("Parola Giriniz")
        }

      } else {
        // show username alert !
        showToast("Geçersiz E-mail")
      }

    } else {
      // show username alert !
      showToast("Kullanıcı Adı Giriniz")
    }
  }
  
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
            onChangeText={setUser}
            
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
              navigation.navigate('HomeStack', { username })
              setUserName(username)
              }}
          />
          <ButtonThird yazı="Google ile Devam Et" />
          <ButtonSecondary
            onPress={() => navigation.navigate('Register')}
            yazı="Henüz bir hesabın yok mu?"
          />
          <ButtonSecondary
            onPress={() => navigation.navigate('ForgotPassword')}
            yazı="Şifremi unuttum"
          />

        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
