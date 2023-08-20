import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  useWindowDimensions,
  ImageBackground,
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
      <ImageBackground
        source={require('../../Images/bg.png')}
        style={{
          resizeMode: 'fill',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -10,
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',

          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Image
          resizeMode="contain"
          source={require('../../Images/Logo.png')}
          style={{
            width: '75%',
            height: '30%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
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
            marginBottom: 20,
          }}>
          <ButtonPrimary text="Kayıt Ol" onPress={_handleSignupPress} />
          {/*Butona tıklayınca  kontrol eder::     <ButtonPrimary text="Giriş Yap" onPress={_handleLoginPress} /> */}
          {/*Her harf girdiğinde kontrol eder::     <ButtonPrimary text="Giriş Yap" onPress={_handleLoginPress()} /> */}

          <ButtonThird yazı="Google ile Devam Et" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
