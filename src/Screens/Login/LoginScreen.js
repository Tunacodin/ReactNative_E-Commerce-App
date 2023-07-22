import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Input from '../../../components/Input';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../../components/Buttons/ButtonSecondary';
import ButtonThird from '../../../components/Buttons/ButtonThird';

const LoginScreen = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const onSignInPressed = () => {
    alert('Giriş Yapıldı');
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

          <Input placeholder="Şifre" value={password} setValue={setPassword} />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <ButtonPrimary yazı="Giriş Yap" onPress={()=>navigation.navigate("Home")} />
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
