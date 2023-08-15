import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import Header from '../../../../components/Logos/Header';
import Carousel from '../../../../components/Carousel/Carousel';
import {create} from 'react-test-renderer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 5,
          backgroundColor: 'white',
          padding: 5,
        }}>
        <MaterialCommunityIcons
          size={30}
          name="clipboard-search-outline"
          color="black"
        />
        <TextInput
          placeholder="Ara"
          placeholderTextColor="black"
          style={{
            width: '90%',
            height: 40,
            backgroundColor: 'white',
            borderRadius: 10,
            alignSelf: 'center',
            paddingLeft: 10,
            borderWidth: 1,
          }}
        />
      </View>
      <ScrollView>
        <View>
          <View
            style={{
              marginTop: 10,
            }}>
            <View
              style={{
                height: 50,
                width: '100%',
                backgroundColor: 'white',
              }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    height: 50,
                    marginHorizontal: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.text}>Sipariş Geçmişim</Text>
                </View>
                <View
                  style={{
                    height: 50,
                    marginHorizontal: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.text}>Bekleyen Siparişler</Text>
                </View>
                <View
                  style={{
                    height: 50,
                    marginHorizontal: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.text}>Sipariş Geçmişim</Text>
                </View>
              </ScrollView>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#e0e0e0',
                height: 400,
                backgroundColor: 'white',
                borderTopWidth: 1,
                borderTopColor: 'lightgrey',
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'Poppins-Medium',
                  textAlign: 'center',
                }}>
                Henüz Bir Alışveriş Geçmişiniz Bulunmuyor
              </Text>
              <Image
                source={require('../../../Images/Balon.jpg')}
                style={{
                  width: 200,
                  height: 200,
                  marginTop: 20,
                  resizeMode: 'contain',
                }}
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
          </View>
          <View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                marginTop: 10,
                height: 100,
                shadowColor: 'black',
                shadowRadius: 5,
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                elevation: 8,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: 20,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <MaterialCommunityIcons
                  size={50}
                  name="truck-fast"
                  color="brown"
                />
                <Text>Hızlı Teslimat</Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <MaterialCommunityIcons
                  size={50}
                  name="shield-check"
                  color="lightgreen"
                />
                <Text>Dayanıklı Ürün</Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <MaterialCommunityIcons
                  size={50}
                  name="credit-card"
                  color="red"
                />
                <Text>Güvenilir Ödeme</Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                height: 100,
                shadowColor: 'black',
                shadowRadius: 5,
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                elevation: 8,
                backgroundColor: 'white',
                borderTopWidth: 1,
                borderTopColor: 'lightgrey',
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Medium',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Beğendiğin ürünleri favorilere ekle, indirime girdiği zaman
                anında haberdar ol!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 18,
    padding: 2,
    paddingTop: 6,
    textAlign: 'center',
    width: 160,
  },
});
