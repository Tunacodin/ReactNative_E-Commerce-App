import React,{useContext} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import { UserContext } from '../../Contexts/UserContext';


const HomeScreen = ({ navigation }) => {
  

  let { username,password } = useContext(UserContext);
  console.log("userName", username);

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
