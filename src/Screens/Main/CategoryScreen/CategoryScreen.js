import React from 'react';
import {View,Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../../components/Logos/Header';
import MermerListCard from '../../../../components/Cards/MermerListCard';
import AhsapListCard from '../../../../components/Cards/AhsapListCard';

const CategoryScreen = () => {
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
          padding: 5,
        }}>
        <View
          style={{
            flex: 1,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderColor: '#FFD1D1',
            borderRadius: 10,
            padding: 5,
          }}></View>

        
        <View
          style={{
            flex: 8,
            backgroundColor: '#FFE3E1',
            padding: 5,
            marginTop: 5,
            borderRadius: 10,
            gap: 15,
            marginBottom:60,
          }}>
         
          <MermerListCard/>

      <AhsapListCard/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
