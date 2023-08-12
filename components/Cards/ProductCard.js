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

const ProductCard = () => {
  const DATA = [
    {
      id: '1',
      title: 'İkili Gümüş Set',
      subtitle: 'Afrodit Set Altın Mermer / Ücretsiz Kargo /',
      price: '310₺',
      discountedPrice: '120₺',
      image: require('../../src/Images/Figür.png'),
    },
    {
      id: '2',
      title: 'Fincan Takımlı Tepsi ',
      subtitle: 'Afrodit Set Altın Mermer / Ücretsiz Kargo /',
      image: require('../../src/Images/aksesuar.png'),
      price: '460₺',
      discountedPrice: '490₺',
    },
    {
      id: '3',
      title: 'İkili Altın Set',
      subtitle: 'Afrodit Set Altın Mermer / Ücretsiz Kargo /',
      image: require('../../src/Images/dekor.png'),
      price: '540₺',
      discountedPrice: '430₺',
    },
    {
      id: '4',
      title: 'Masa Lambası',
      subtitle: 'Afrodit Set Altın Mermer / Ücretsiz Kargo /',
      image: require('../../src/Images/set.png'),
      price: '630₺',
      discountedPrice: '230 ₺',
    },
  ];

  function renderItem({item, index}) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap-reverse',
          width: 200,
          height: 450,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',

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
            height: 280,
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
          }}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'darkcyan',

              bottom: -10,
              width: '100%',
              height: 40,
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
          <Pressable
            onPress={() => navigate('ProductDetails')}
            style={{
              position: 'absolute',
              right: -20,
            }}>
            <MaterialCommunityIcons
              name="cart"
              color="white"
              size={30}
              style={{
                bottom: -40,
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
          <View
            style={{
              flexDirection: 'column',
              width: '100%',
              height: 100,
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 13,
                margin: 15,
                color: 'black',
                fontWeight: '500',
              }}>
              {item.subtitle}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        style={{}}
        numColumns={2}
        columnWrapperStyle="space-between"
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

export default ProductCard;
