import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddToCart2 = ({price, discountedprice}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 30,
        backgroundColor: '#FEBBCC',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopWidth: 1,
        borderColor: '#445069',
      }}>
      <View
        style={{
          width: '40%',
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'white',
          padding: 12,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
          }}>
          {discountedprice}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            color: '#445069',
            textDecorationLine: 'line-through',
          }}>
          {price}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
            color: '#D14D72',
          }}>
          Sepete Ekle
        </Text>
      </View>
      <View>
        <MaterialCommunityIcons
          name="cart"
          size={30}
          color="black"
          style={{
            alignSelf: 'flex-end',
            padding: 10,
            borderColor: 'white',
          }}></MaterialCommunityIcons>
      </View>
    </View>
  );
};

export default AddToCart2;
