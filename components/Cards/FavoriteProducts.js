import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

const favoriteProducts = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={favoriteProducts}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              // Favori ürünün detay sayfasına git
              // Örneğin: navigation.navigate('ProductDetail', { product: item });
              navigation.navigate('Profile', {product: item});
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}>
            <Image
              source={item.image}
              style={{width: 60, height: 60, marginRight: 10}}
            />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default favoriteProducts;
