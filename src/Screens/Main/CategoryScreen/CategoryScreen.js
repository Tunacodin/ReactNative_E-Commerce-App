import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../../components/Logos/Header';
import MermerListCard from '../../../../components/Cards/MermerListCard';
import AhsapListCard from '../../../../components/Cards/AhsapListCard';
import SmallCard from '../../../../components/Cards/SmallCard';

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
            borderColor: 'rgba(0,0,0,0.4)',
            borderRadius: 10,
            padding: 5,
          }}></View>

        <View
          style={{
            flex: 8,
            padding: 5,
            marginTop: 5,
            borderRadius: 10,
            marginBottom: 60,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                width: "100%",
                height:"20%",
            }}
            >

            </View>
            <SmallCard
              source={require('../../../Images/set2.png')}
              text="Setler"
            />
            <SmallCard
              source={require('../../../Images/siyahtepsi.png')}
              text="Tepsiler"
            />
            <SmallCard
              source={require('../../../Images/dekor.png')}
              text="Dekorasyon"
            />
  
            <SmallCard
              source={require('../../../Images/sunum.png')}
              text="Sunum"
            />
            <SmallCard
              source={require('../../../Images/Figür.png')}
              text="Aksesuar"
            />
    
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
