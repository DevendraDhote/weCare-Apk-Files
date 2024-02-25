import React from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import {tw} from '../utils';
const {height} = Dimensions.get('screen');
export const Cards = ({title, source, distance, ratings}) => {
  return (
    <View
      style={tw`flex flex-row w-full overflow-hidden h-[${
        (height / 100) * 5
      }] border border-black rounded-lg`}>
      <View style={tw`flex flex-col w-full items-center`}>
        <View style={tw`h-[60%] w-full bg-gray-400`}>
          <Image source={source} style={tw`w-full h-full`} resizeMode="cover" />
        </View>
        <View style={tw`self-start p-[2.5%]`}>
          <Text style={tw`text-base font-bold text-black`}>{title}</Text>
          <Text style={tw`text-sm font-medium text-gray-700`}>
            {distance}km Away
          </Text>
          <Text style={tw`text-sm font-medium text-gray-700`}>
            {ratings} reviews
          </Text>
        </View>
      </View>
    </View>
  );
};
