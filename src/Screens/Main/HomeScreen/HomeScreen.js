import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Pressable,
  Button,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate} from '../../../Assets/RootNavigation';
import Header from '../../../../components/Logos/Header';

const DATA = [
  {
    id: '1',
    title: 'İkili Gümüş Set',
    subtitle:
      'Afrodit Set Gümüş Mermer / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.',
    price: '310₺',
    discountedPrice: '120₺',
    image: require('../../../Images/ev.jpg'),
  },
  {
    id: '2',
    title: 'Fincan Takımlı Tepsi ',
    subtitle:
      'Fincan Takımlı Tepsi Seti / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.',
    image: require('../../../Images/altın.jpg'),
    price: '460₺',
    discountedPrice: '490₺',
  },
  {
    id: '3',
    title: 'İkili Altın Set',
    subtitle:
      'Afrodit Set Altın Mermer / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.',
    image: require('../../../Images/Tepsiler/Tahta mermer.jpg'),
    price: '540₺',
    discountedPrice: '430₺',
  },
  {
    id: '4',
    title: 'Masa Lambası',
    subtitle:
      'Masa Lambası / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.',
    image: require('../../../Images/Tepsiler/siyah mermer.png'),
    price: '630₺',
    discountedPrice: '230 ₺',
  },
];

const HomeScreen = () => {
  function renderItem({item, index}) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 5,
          color: 'black',
        }}>
        <View
          style={{
            width: '90%',
            height: 550,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 5,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            elevation: 5,
          }}>
          <View
            style={{
              width: '100%',
              height: 380,
              backgroundColor: 'grey',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: 10,
              }}
              source={item.image}
            />
          </View>

          <Text
            style={{
              fontSize: 20,
              marginTop: 10,
              marginBottom: 10,
              color: 'black',
              fontWeight: 'bold',
            }}>
            {item.title}
          </Text>

          <View
            style={{
              width: '80%',
              height: 100,
              borderColor: 'grey',
              alignItems: 'center',
              marginTop: 5,
              borderTopColor: 'black',
              borderTopWidth: 1.5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            }}>
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'darkcyan',
                left: -50,
                bottom: 105,
                width: 85,
                height: 40,
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                shadowRadius: 10,
                shadowColor: 'purple',
                shadowOpacity: 0.7,
                elevation: 5,
                padding: 2,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 10,
                  color: 'black',
                  alignSelf: 'flex-start',
                  fontFamily: 'monospace',
                  paddingLeft: 5,
                  paddingTop: 5,
                  textTransform: 'capitalize',
                  textDecorationLine: 'line-through',
                }}>
                {item.price}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'monospace',
                  color: 'white',
                  marginBottom: 15,
                  paddingBottom: 5,
                  letterSpacing: 1,
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}>
                {item.discountedPrice}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                rowGap: 10,
                width: '100%',
                height: 100,
                marginBottom: 20,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 20,
                  color: 'black',
                  textAlign: 'left',
                  alignSelf: 'center',
                  fontWeight: '500',
                  marginRight: 40,
                }}>
                {item.subtitle}
              </Text>

              <Text></Text>
            </View>

            <Pressable
              onPress={() => navigate('ProductDetails')}
              style={{
                position: 'absolute',
                right: -20,
              }}>
              <MaterialCommunityIcons
                name="cart"
                color="white"
                size={35}
                style={{
                  marginTop: 20,
                  alignSelf: 'flex-end',
                  backgroundColor: 'black',
                  padding: 5,
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 1,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  elevation: 5,
                }}
              />
            </Pressable>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
      <Header />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

export default HomeScreen;
