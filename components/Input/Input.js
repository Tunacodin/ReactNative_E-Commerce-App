import React from 'react'
import {TextInput,View} from "react-native"

const Input = ({value,placeholder,onChangeText,secureTextEntry}) => {
  return (
      <TextInput
      value={value}
      
        onChangeText={onChangeText}
        placeholder={placeholder}
       secureTextEntry={secureTextEntry}

      style={{
          borderWidth: 1,
          padding: 10,
          width: '90%',
          borderRadius: 10,
          backgroundColor: 'white',
          borderColor: 'grey',
        }}></TextInput>
  );
}

export default Input
