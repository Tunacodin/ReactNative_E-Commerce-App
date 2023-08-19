import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Input from '../../../components/Input/Input';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../../components/Buttons/ButtonSecondary';
import ButtonThird from '../../../components/Buttons/ButtonThird';
import {useNavigation} from '@react-navigation/native'; // navigation hook eklendi
import Toast from 'react-native-toast-message';
import {validateEmail} from '../../helper/functions/MyHelperFunctions';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showToast = (text, type = 'error') => {
    Toast.show({
      type: type,
      text2: text,
    });
  };

  const _handleLoginPress = () => {
    if (validateEmail(email)) {
      if (password) {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('user login success !');
            showToast('Giriş Başarılı', 'success');
            setEmail('');
            setPassword('');
            navigation.navigate('HomeStack'); // navigation.navigate ile yönlendirme
          })
          .catch(error => {
            console.error(error);
            showToast('Kullanıcı Adı & Parola hatalı');
          });
      } else {
        // show password alert !
        showToast('Parola Giriniz');
      }
    } else {
      // show username alert !
      showToast('Geçersiz E-mail');
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
          <ButtonPrimary text="Giriş Yap" onPress={_handleLoginPress} />
          {/*Butona tıklayınca  kontrol eder::     <ButtonPrimary text="Giriş Yap" onPress={_handleLoginPress} /> */}
          {/*Her harf girdiğinde kontrol eder::     <ButtonPrimary text="Giriş Yap" onPress={_handleLoginPress()} /> */}

          <ButtonThird yazı="Google ile Devam Et" />
          <ButtonSecondary
            onPress={() => navigation.navigate('Register')}
            text="Henüz bir hesabın yok mu?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
