import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddToCart2 = ({price, discountedprice, navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 30,
        backgroundColor: '#e91e63',

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: '#e91e63',
      }}>
      <View
        style={{
          width: '40%',
          height: '90%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 9,
          borderRadius: 10,
          marginLeft: -15,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Poppins-Medium',
            color: '#445069',
            textDecorationLine: 'line-through',
            paddingRight: 3,
          }}>
          {price}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
            color: 'black',
          }}>
          {discountedprice}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
            color: 'white',
          }}>
          Sepete Ekle
        </Text>
      </View>
      <View>
        <MaterialCommunityIcons
          name="cart"
          size={25}
          color="white"
          onPress={() => navigation.navigate('Profile')}
          style={{
            alignSelf: 'center',
            padding: 7,
            borderRadius: 10,
            marginRight: -20,
            backgroundColor: 'black',
          }}></MaterialCommunityIcons>
      </View>
    </View>
  );
};

export default AddToCart2;
