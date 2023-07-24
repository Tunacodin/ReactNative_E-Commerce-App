import React, {useState} from 'react';
import {View, Image} from 'react-native';
import Input from '../../../components/Input/Input';
import ButtonThird from '../../../components/Buttons/ButtonThird';
import ButtonSecondary from '../../../components/Buttons/ButtonSecondary';

const CreatePasswordScreen = ({navigation}) => {
  const [password, setPassword] = useState('');

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
        <Input
          placeholder="Yeni Şifre"
          value={password}
          setValue={setPassword}
        />
        <Input
          placeholder="Yeni Şifreni Tekrar Gir"
          value={password}
          setValue={setPassword}
        />
        <ButtonThird
          yazı="Onayla"
          onPress={() => navigation.navigate('Login')}
        />
        <ButtonSecondary
          yazı="Geri"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default CreatePasswordScreen;
