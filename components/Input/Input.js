import React from 'react'
import {TextInput,View} from "react-native"

const Input = ({value,placeholder,onChangeText,secureText, setValue}) => {
  return (
      <TextInput
      value={value}
      setValue={setValue}
      
        onChangeText={onChangeText}
        placeholder={placeholder}
      secureTextEntry={secureText}

      

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
