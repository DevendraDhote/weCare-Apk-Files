import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {tw} from '../utils';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Reminder = () => {
  const navigation = useNavigation();

  return (
    <View
      Style={tw`flex flex-col bg-white w-full h-full justify-start items-center`}>
      <View
        style={tw`h-[7%] w-full flex flex-row justify-between p-[3%] items-center bg-white`}>
        <View style={tw`flex flex-row items-center`}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Homee');
            }}>
            <FontAwesome6 name="arrow-left-long" color="black" size={30} />
          </TouchableOpacity>

          <Text style={tw`text-lg ml-[20%] font-semibold text-black`}>
            Reminder
          </Text>
        </View>
      </View>
      <View
        style={tw`w-[95%] h-full flex flex-col items-center p-[0.9%] self-center justify-start`}>
        <Text style={tw`text-2xl font-semibold mt-[5%] self-center text-black`}>
          Priscription Documents
        </Text>
        <Text
          style={tw`text-sm font-semibold self-center mt-[2%] text-gray-600`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi esse
          quaerat deserunt natus eaque, minus, consequatur reiciendis voluptate
          sed necessitatibus dicta vel iusto perferendis similique.
        </Text>
      </View>
    </View>
  );
};

export default Reminder;
