import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {create} from 'react-test-renderer';
import Header from '../../../../components/Logos/Header';
import SmallCard from '../../../../components/Cards/SmallCard';

const ProductCardScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Header />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#e0e0e0',
        }}>
        <Text>Henüz Sepetinizde bir ürün yok</Text>
      </View>
      <View style={{flex: 8, padding: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
          }}>
          Çok Satan Ürünler!
        </Text>
        <SmallCard
          source={require('../../../Images/siyahtepsi.png')}
          text="Mermer"
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductCardScreen;

// styles stylesheet create

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
