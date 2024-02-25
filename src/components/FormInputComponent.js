import React from 'react';
import {Text, View, TextInput, Dimensions} from 'react-native';
import {tw} from '../utils';
const {height} = Dimensions.get('screen');
export const FormInputComponent = ({
  title,
  keyboardType,
  textCenter = false,
  helper,
  value,
  onChangeText,
  placeholder = '',
  maxLength,
  editable = true,
  secureTextEntry,
}) => {
  return (
    <View style={tw`flex flex-row  w-[90%] my-[3%] h-[${(height / 100) * 2}]`}>
      <View style={tw`flex w-full`}>
        {title && (
          <View style={tw`flex flex-row ${textCenter ? 'justify-center' : ''}`}>
            <Text
              keyboardType={keyboardType}
              style={tw`font-primary-bold text-center text-black m-[1%]`}>
              {title}
            </Text>
          </View>
        )}

        <TextInput
          editable={editable}
          value={value}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          maxLength={maxLength}
          onChangeText={onChangeText}
          textAlign={textCenter ? 'center' : 'left'}
          style={tw` bg-gray-100 border rounded-md text-black text-sm font-primary-bold  w-full px-[2.5%]`}
          keyboardType={keyboardType}
        />
        {helper && helper}
      </View>
    </View>
  );
};
