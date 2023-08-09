import React from 'react';
import {Pressable, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddToCart = ({price, discountedPrice}) => {
  return (
    <View
      style={{
        width: '80%',
        height: 48,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 25,
        borderStyle: 'solid',
        borderColor: 'grey',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 3,
          height: 3,
        },
        elevation: 5,
      }}>
      <Text
        style={{
          fontSize: 19,
          fontFamily: 'Poppins-Medium',
          textDecorationLine: 'line-through',
          textAlign: 'center',
          paddingLeft: 10,
        }}>
        {price}
      </Text>

      <View
        style={{
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 22,
          borderRadius: 10,
          borderColor: 'grey',
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            height: '100%',
            paddingHorizontal: 2,
            backgroundColor: '#e91e63',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-Regular',
              color: 'white',
              textAlign: 'center',
              paddingHorizontal: 5,
            }}>
            {discountedPrice}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Regular',
            color: 'black',
          }}>
          Sepete Ekle
        </Text>
        <Pressable onPress={() => navigate('ProductDetails')}>
          <MaterialCommunityIcons
            name="cart-plus"
            color="white"
            size={30}
            style={{
              backgroundColor: 'black',
              paddingHorizontal: 10,
              paddingVertical: 7,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default AddToCart;
