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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

const ProductCardScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            height: 400,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Poppins-Medium',
            }}>
            Henüz Sepetinizde bir ürün yok
          </Text>
          <MaterialCommunityIcons
            size={40}
            name="cart-off"
            color="#e0e0e0"
            style={{marginTop: 20, marginBottom: 20}}
          />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              padding: 20,
            }}>
            Sepetinize ürün eklemek için ürünlerimizi inceleyebilirsiniz
          </Text>
        </View>
        <View style={{padding: 10}}>
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
                fontFamily: 'Poppins-MediumItalic',
                fontSize: 20,
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
        </View>

        <View
          style={{
            width,
            height: 350,
            shadowColor: 'black',
            shadowRadius: 5,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            elevation: 8,
            padding: 10,
            marginBottom: 80,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-MediumItalic',
              fontSize: 20,
            }}>
            Yeni Eklenen Ürünler
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
              source={require('../../../Images/siyahtepsi.png')}
            />
            <Image
              style={{
                resizeMode: 'contain',
                width: 210,
                height: 300,
                marginHorizontal: 5,
                borderRadius: 10,
              }}
              source={require('../../../Images/sunum.png')}
            />
            <Image
              style={{
                resizeMode: 'contain',
                width: 210,
                height: 300,
                marginHorizontal: 5,
                borderRadius: 10,
              }}
              source={require('../../../Images/tasarım.png')}
            />
          </ScrollView>
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
