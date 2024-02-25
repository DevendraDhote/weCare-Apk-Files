import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import {tw} from '../utils';

const TopBarTwo = ({navigation, text}) => {
  return (
    <View
      style={tw`h-[7%] w-full flex flex-row justify-between p-[3%] items-center bg-white`}>
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Homee');
          }}>
          <FontAwesome6 name="arrow-left-long" color="black" size={30} />
        </TouchableOpacity>
        <Image
          source={require('../assets/gifs/mapPin.png')}
          style={tw`w-24 h-9`}
          resizeMode="contain"
        />
        <Text style={tw`text-lg ml-[-15%] font-semibold text-black`}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default TopBarTwo;
