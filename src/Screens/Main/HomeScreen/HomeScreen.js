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
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigate} from '../../../Assets/RootNavigation';
import Header from '../../../../components/Logos/Header';
import AddToCart from '../../../../components/AddToCart/AddToCart';

const DATA = [
  {
    id: '1',
    title: "Afrodit 2'li Set",
    subtitle: {
      p1: 'Beyaz Mermer',
      p2: 'Gümüş Kulp',
      p3: 'Boyut: 30x50 ',
      p4: 'Ücretsiz Kargo',
    },

    price: '310₺',
    discountedPrice: '120₺',
    image: require('../../../Images/set.png'),
  },
  {
    id: '2',
    title: 'Fincan Takımlı Tepsi ',
    subtitle:
      'Fincan Takımlı Tepsi Seti / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.',
    image: require('../../../Images/set2.png'),
    price: '460₺',
    discountedPrice: '490₺',
  },
  {
    id: '3',
    title: 'İkili Altın Set',
    subtitle:
      'Afrodit Set Altın Mermer / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.',
    image: require('../../../Images/Figür.png'),
    price: '540₺',
    discountedPrice: '430₺',
  },
  {
    id: '4',
    title: 'Masa Lambası',
    subtitle:
      'Masa Lambası / Ücretsiz Kargo / Ürünlerimiz El Yapımı Olduğu İçin 1-3 İş Günü İçerisinde Kargoya Teslim Edilir.',
    image: require('../../../Images/siyahtepsi.png'),
    price: '630₺',
    discountedPrice: '230 ₺',
  },
];

const HomeScreen = () => {
  function renderItem({item, index}) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            height: 450,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 15,
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
              height: 300,
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
              marginTop: 20,
              fontSize: 20,
              color: 'black',
              fontFamily: 'Poppins-Medium',
            }}>
            {item.title}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                textAlign: 'left',
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                marginHorizontal: 5,
              }}>
              {`\u2023 ${item.subtitle.p1}\n`}
              {`\u2023 ${item.subtitle.p2}\n`}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                textAlign: 'left',
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                marginHorizontal: 5,
              }}>
              {`\u2023 ${item.subtitle.p3}\n`}
              {`\u2023 ${item.subtitle.p4}\n`}
            </Text>
          </View>
          <AddToCart
            price={item.price}
            discountedPrice={item.discountedPrice}
          />
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
