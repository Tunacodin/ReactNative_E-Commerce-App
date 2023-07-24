import React, {useState} from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import Input from '../../../components/Input/Input';
import ButtonSecondary from '../../../components/Buttons/ButtonSecondary';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import ButtonThird from '../../../components/Buttons/ButtonThird';
import ButtonFourth from '../../../components/Buttons/ButtonFourth';

function ForgotPasswordScreen({navigation}) {
  const [email, setEmail] = useState('');
  return (
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
        <Input placeholder="E-mail" value={email} setValue={setEmail} />
        <ButtonThird
          yazı="Şifre Sıfırlama Kodu Gönder"
          onPress={() => navigation.navigate('CreatePassword')}
        />
        <ButtonSecondary
          yazı="Geri"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}

export default ForgotPasswordScreen;
