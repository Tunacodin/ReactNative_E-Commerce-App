import React from 'react'
  import auth from '@react-native-firebase/auth';

import { View, Text } from 'react-native'

const ProfileScreen = () => {

  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  return (
    <View>
          <Text>
              Profil Sayfası
      </Text>
    </View>
  )
}

export default ProfileScreen
