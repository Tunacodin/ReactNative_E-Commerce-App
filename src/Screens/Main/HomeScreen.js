import React,{useContext} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import LoginContext from '../Login/LoginContext';


const HomeScreen = ({ navigation,route }) => {
  const { username,password } = useContext(LoginContext)
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Text>
        {kullanıcıAdı}
  </Text>
    </View>
  );
};

export default HomeScreen;
