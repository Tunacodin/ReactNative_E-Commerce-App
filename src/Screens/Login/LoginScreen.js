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
import { navigate } from '../../Assets/RootNavigation';
import Toast from 'react-native-toast-message';
import { validateEmail } from '../../helper/functions/MyHelperFunctions';
import auth from '@react-native-firebase/auth';







const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // default olarak error type alır
  
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
                      showToast("Giriş Başarılı", "success");
                         setEmail('');
                         setPassword('');
                      
                   
                    
                    })
                    .catch(error => {
                        console.error(error);

                        showToast("Kullanıcı Adı & Parola hatalı")
                    });

            } else {
                // show password alert !
                showToast("Parola Giriniz")
            }

        } else {
            // show username alert !
            showToast("Geçersiz E-mail")
     }
    navigate('HomeStack');
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
          <ButtonPrimary text="Giriş Yap" onPress={_handleLoginPress()} />

         
          <ButtonThird yazı="Google ile Devam Et" />
          <ButtonSecondary
            onPress={() => navigate('Register')}
            text="Henüz bir hesabın yok mu?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
