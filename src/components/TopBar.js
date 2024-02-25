import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {tw} from '../utils';

const TopBar = ({navigation, text}) => {
  return (
    <View
      style={tw`h-[7%] w-full flex flex-row justify-between p-[3%] items-center bg-white`}>
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity>
          <Feather name="menu" color="black" size={35} />
        </TouchableOpacity>
        <Image
          source={require('../assets/logo.jpg')}
          style={tw`w-24 h-9`}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        style={tw`w-[9%] h-full rounded-full items-center justify-center border-2`}>
        <FontAwesome name="microphone" color="black" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
