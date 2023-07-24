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
const RegisterScreen = ({ navigation,route }) => {
     const {user} = route.params;

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');



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
          <Text>
            {user}
          </Text>
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
          <ButtonFourth yazı="Kayıt Ol" />
          <ButtonThird yazı="Google ile Devam Et" />
          <ButtonSecondary
            onPress={() => navigation.navigate('Login')}
            yazı="Zaten bir hesabın var mı?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
