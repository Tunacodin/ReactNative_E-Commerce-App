import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Input from '../../../components/Input/Input';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../../components/Buttons/ButtonSecondary';
import ButtonThird from '../../../components/Buttons/ButtonThird';
import ButtonFourth from '../../../components/Buttons/ButtonFourth';
import { navigate } from '../../Assets/RootNavigation';
import { UserContext } from '../../Contexts/UserContext';


const RegisterScreen = ({ navigation }) => {
  let {username, password, setUsername, setPassword} = useContext(UserContext);

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
              .createUserWithEmailAndPassword(username, password)
              .then(() => {
                console.log('User account created & signed in!');

                showToast('Kullanıcı Oluşturuldu', 'success');

                navigate('Login');
              })
              .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');

                  showToast('E-mail adresi zaten kullanılıyor');
                }

                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid');
                  showToast('Geçersiz e-mail');
                }

                console.error(error);
              });
          } else {
            // show password alert !
            showToast('Parola en az 6 karakter olmalı');
          }
        } else {
          // show password alert !
          showToast('Parola Giriniz');
        }
      } else {
        // show username alert !
        showToast('Geçersiz E-mail');
      }
    } else {
      // show username alert !
      showToast('Kullanıcı Adı Giriniz');
    }
  };

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
        <View>
          <Text>{user}</Text>
        </View>
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
            setValue={setUsername}
          />
          <Input placeholder="E-mail" value={username} setValue={setUsername} />

          <Input placeholder="Şifre" value={password} setValue={setPassword} />
          <Input
            placeholder="Şifreni Onayla"
            value={password}
            setValue={setPassword}
          />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <ButtonFourth
            onPress={() => _handleSignupPress}
            yazı="Kayıt Ol" />
          

          <ButtonThird yazı="Google ile Devam Et" />
          
          <ButtonSecondary
            onPress={() => navigate('Login')}
            yazı="Zaten bir hesabın var mı?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
