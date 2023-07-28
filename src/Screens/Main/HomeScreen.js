import React,{useContext} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import LoginContext from '../Login/LoginContext';
import { UserContext } from '../../Contexts/UserContext';


const HomeScreen = ({ navigation, route }) => {
  
  const { username, password } = route.params;

  let { userName } = useContext(UserContext);
  console.log("userName", userName);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Text>
        {username}
        {password}
  </Text>
    </View>
  );
};

export default HomeScreen;
