import React from 'react';
import auth from '@react-native-firebase/auth';

import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';
import ButtonSecondary from '../../../../components/Buttons/ButtonSecondary';
import ButtonThird from '../../../../components/Buttons/ButtonThird';
import {navigate} from '../../../Assets/RootNavigation';
import {useState} from 'react';
import Header from '../../../../components/Logos/Header';
import FavoriteProducts from '../../../../components/Cards/FavoriteProducts';
import {UserContext} from '../../../Contexts/UserContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({route}) => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!', 'success');
        navigate('LoginStack');
      });
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F9F5F2',
      }}>
      <Header />
      <ScrollView
        style={{
          backgroundColor: '#F9F5F2',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 200,
            borderBottomWidth: 1,
            borderBottomColor: 'darkgrey',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 20,
              color: 'black',
            }}>
            Hoş Geldiniz
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="account-circle"
              size={100}
              color="grey"
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}></MaterialCommunityIcons>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
              }}>
              bostancibasituna58@gmail.com
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            padding: 10,
            flexDirection: 'column',
            rowGap: 10,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity activeOpacity={0.9}>
            <View
              style={{
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <MaterialCommunityIcons
                name="cart"
                size={24}></MaterialCommunityIcons>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'Poppins-Medium',
                }}>
                Siparişlerim
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.9}>
            <View
              style={{
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <MaterialCommunityIcons
                name="star"
                size={24}
                color="orange"></MaterialCommunityIcons>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'Poppins-Medium',
                }}>
                Favori Ürünlerim
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <MaterialCommunityIcons
              name="logout"
              size={24}
              onPress={() => navigate(logout)}></MaterialCommunityIcons>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Poppins-Medium',
              }}>
              Çıkış Yap
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              padding: 10,
              margin: 30,
              borderWidth: 1,
              borderColor: 'darkgrey',
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: 'white',
              marginTop: 100,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Poppins-Medium',
                color: 'black',
                padding: 10,
              }}>
              Bize Ulaşın
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 4,
                }}>
                <MaterialCommunityIcons
                  name="instagram"
                  size={28}
                  color="black"></MaterialCommunityIcons>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  fenneDesign
                </Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 2,
                  }}>
                  <MaterialCommunityIcons
                    name="phone"
                    size={28}
                    color="black"></MaterialCommunityIcons>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    0526-822-09-11
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  columnGap: 15,
                }}>
                <MaterialCommunityIcons
                  name="map-marker-multiple"
                  size={24}
                  color="black"></MaterialCommunityIcons>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Bağbaşı, Vatan Cd No:95, 20160 Pamukkale/Denizli
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
