import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {tw} from '../utils';

const NextButton = ({onPress, name}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-blue-600 p-[2%] w-[50%] flex flex-row justify-center rounded-lg items-center`}>
      <Text style={tw`text-white text-lg font-primary-semibold`}>{name}</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
