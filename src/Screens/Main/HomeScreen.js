import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';


const HomeScreen = () => {
  
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>User ID: {item.id}</Text>
          <Text>User Name: {item.name}</Text>
        </View>
      )}
    />
  );
};

export default HomeScreen;
