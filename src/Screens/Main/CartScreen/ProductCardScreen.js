import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {create} from 'react-test-renderer';
import Header from '../../../../components/Logos/Header';
import SmallCard from '../../../../components/Cards/SmallCard';
import Swiper from 'react-native-swiper';
import ProductCard from '../../../../components/Cards/ProductCard';

const {width} = Dimensions.get('window');

const ProductCardScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Header />

      <ScrollView>
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
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                padding: 10,
              }}>
              Katalog
            </Text>
            <SmallCard
              source={require('../../../Images/siyahtepsi.png')}
              text="Mermer"
            />
            <SmallCard
              source={require('../../../Images/dekor.png')}
              text="Ahşap"
            />
          </View>

          <View
            style={{
              width,
              marginTop: 10,
              height: 350,
              shadowColor: 'black',
              shadowRadius: 5,
              shadowOffset: {
                width: 0,
                height: 6,
              },
              elevation: 8,
            }}>
            <Text
              style={{
                fontSize: 0,
                fontWeight: 'bold',
              }}>
              Çok Satan Ürünler
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                width: '100%',
                paddingVertical: 5,
                borderTopWidth: 1,
                borderEndWidth: 1,
              }}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: 210,
                  height: 300,
                  marginHorizontal: 5,
                  borderRadius: 10,
                }}
                source={require('../../../Images/aksesuar.png')}
              />
              <Image
                style={{
                  resizeMode: 'contain',
                  width: 210,
                  height: 300,
                  marginHorizontal: 5,
                  borderRadius: 10,
                }}
                source={require('../../../Images/set.png')}
              />
              <Image
                style={{
                  resizeMode: 'contain',
                  width: 210,
                  height: 300,
                  marginHorizontal: 5,
                  borderRadius: 10,
                }}
                source={require('../../../Images/set2.png')}
              />
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
            }}>
            <ProductCard />
            <ProductCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    width: '100%',
    height: 150,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150,
  },
});
