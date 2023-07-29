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
import { navigate } from '../../Assets/RootNavigation';
import Toast from 'react-native-toast-message';
import { validateEmail } from '../../helper/functions/MyHelperFunctions';






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

                        navigate("HomeTabs")
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
            onChangeText={setEmail}
            
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
            onPress={() => _handleLoginPress()
            
              }
          />
          <ButtonThird yazı="Google ile Devam Et" />
          <ButtonSecondary
            onPress={() => navigate('Register')}
            yazı="Henüz bir hesabın yok mu?"
          />
          <ButtonSecondary
            onPress={() => navigate('ForgotPassword')}
            yazı="Şifremi unuttum"
          />

        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
