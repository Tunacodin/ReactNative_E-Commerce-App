import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import Input from '../../../components/Input/Input';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../../components/Buttons/ButtonSecondary';
import ButtonThird from '../../../components/Buttons/ButtonThird';
import ButtonFourth from '../../../components/Buttons/ButtonFourth';
import {navigate} from '../../Assets/RootNavigation';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import HomeScreen from '../Main/HomeScreen/HomeScreen';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //default olarak type= "error verdik" sadece değiştirmek istediğimiz zaman type ı değiştireceğiz

  const showToast = (text, type = 'error') => {
    Toast.show({
      type: type,
      text2: text,
    });
  };

  const _handleSignupPress = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        showToast('Kullanıcı Oluşturuldu!', 'success');
        setEmail('');
        setPassword('');
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          showToast('Bu mail adresi zaten kullanılıyor!', error);
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          showToast('Geçersiz mail adresi!', error);
        }

        console.error(error);
      });
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
          style={{
            width: '75%',
            height: '30%',
            borderTopLeftRadius: 40,
            borderBottomRightRadius: 40,
            borderWidth: 1,
            borderColor: 'darkblue',
          }}
        />

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <Input
            placeholder="Şifre"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <ButtonFourth onPress={_handleSignupPress} yazı="Kayıt Ol" />

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
