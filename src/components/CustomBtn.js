import React from 'react';
import {Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';
import {tw} from '../utils';
const {height} = Dimensions.get('screen');
export const CustomBtn = ({text, navigation, source, onPress}) => {
  return (
    <View
      style={tw`flex flex-row p-[2.5%] w-[45%] bg-white  h-[${
        (height / 100) * 1.5
      }] border-2 border-gray-500 rounded-lg`}>
      <TouchableOpacity onPress={onPress} style={tw`h-full w-full`}>
        <View style={tw`flex flex-row items-center`}>
          <Text style={tw`text-lg text-gray-500`}>{text}</Text>
          <Image source={source} style={tw`w-22 h-7`} resizeMode="contain" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
