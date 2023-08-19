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
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonPrimary from '../../../../components/Buttons/ButtonPrimary';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {navigate} from '../../../Assets/RootNavigation';
import Header from '../../../../components/Logos/Header';
import AddToCart from '../../../../components/AddToCart/AddToCart';
import * as RootNavigation from '../../../Assets/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddToCart2 from '../../../../components/AddToCart/AddToCart2';
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
    discountedPrice: '120TL',
    image: require('../../../Images/set.png'),
  },
  {
    id: '2',
    title: 'Fincan Takımlı Tepsi ',
    subtitle: {
      p1: 'Beyaz Mermer',
      p2: 'Gümüş Kulp',
      p3: 'Boyut: 30x50 ',
      p4: 'Ücretsiz Kargo',
    },

    image: require('../../../Images/set2.png'),
    price: '460₺',
    discountedPrice: '490TL',
  },
  {
    id: '3',
    title: 'İkili Altın Set',
    subtitle: {
      p1: 'Beyaz Mermer',
      p2: 'Gümüş Kulp',
      p3: 'Boyut: 30x50 ',
      p4: 'Ücretsiz Kargo',
    },

    image: require('../../../Images/Figür.png'),
    price: '540₺',
    discountedPrice: '430TL',
  },
  {
    id: '4',
    title: 'Masa Lambası',
    subtitle: {
      p1: 'Beyaz Mermer',
      p2: 'Gümüş Kulp',
      p3: 'Boyut: 30x50 ',
      p4: 'Ücretsiz Kargo',
    },

    image: require('../../../Images/siyahtepsi.png'),
    price: '630₺',
    discountedPrice: '230TL',
  },
];

const HomeScreen = ({navigation}) => {
  function renderItem({item, index}) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
            <MaterialCommunityIcons
              name="heart"
              size={25}
              color="white"
              style={{
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 99,
                padding: 5,
                borderRadius: 8,
                marginRight: 4,
              }}></MaterialCommunityIcons>
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
          <AddToCart2
            price={item.price}
            discountedprice={item.discountedPrice}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView
      style={{
        height: '95%',
      }}>
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'black',
            width: '100%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 15,
            alignSelf: 'center',
          }}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={30}
            color="white"
            style={{
              alignSelf: 'flex-start',
              padding: 10,
            }}></MaterialCommunityIcons>
          <TextInput
            placeholder="Ara"
            placeholderTextColor="black"
            style={{
              width: '70%',
              height: 40,
              backgroundColor: 'white',
              borderRadius: 10,
              alignSelf: 'center',
              paddingLeft: 10,
              borderWidth: 1,
            }}
          />
          <MaterialCommunityIcons
            name="bell-badge-outline"
            size={30}
            color="white"
            onPress={() => navigation.navigate('Notifications')}
            style={{
              alignSelf: 'flex-end',
              padding: 10,
            }}></MaterialCommunityIcons>
          <MaterialCommunityIcons
            name="account"
            size={30}
            color="white"
            style={{
              alignSelf: 'flex-end',
              padding: 10,
            }}
            onPress={() =>
              navigation.navigate('Profile')
            }></MaterialCommunityIcons>
        </View>
        <View
          style={{
            marginTop: -8,
            marginBottom: 15,
            width: '100%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: 'grey',
            shadowColor: 'purple',
            shadowOffset: {
              width: 2,
              height: 4,
            },
            shadowOpacity: 0.25,
            elevation: 4,
          }}>
          <Image
            style={{
              width: '110%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../../../Images/banner1.png')}
          />
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
