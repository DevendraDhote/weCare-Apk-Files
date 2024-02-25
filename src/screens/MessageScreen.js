import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {tw} from '../utils';
import TopBar from '../components/TopBar';
import {CustomBtn} from '../components/CustomBtn';

const MessageScreen = () => {
  return (
    <View
      Style={tw`flex flex-col bg-white w-full h-full justify-start items-center`}>
      <TopBar text={'Edit Business Account'} />
      <View
        style={tw`w-[95%] h-full flex flex-col items-center p-[0.9%] self-center justify-start`}>
        <View
          style={tw`flex flex-row w-full mt-[3%] justify-between items-center`}>
          <CustomBtn
            text={'Questions'}
            source={require('../assets/question.png')}
          />
          <CustomBtn
            text={'Reminders'}
            source={require('../assets/reminder.png')}
          />
        </View>
        <View
          style={tw`flex flex-row w-full mt-[3%] justify-between items-center`}>
          <CustomBtn
            text={'Messages'}
            source={require('../assets/message.png')}
          />
          <CustomBtn
            text={'Calendars'}
            source={require('../assets/calendar.png')}
          />
        </View>
        <Text style={tw`text-lg font-semibold self-start mt-[10%] text-black`}>
          UPLOAD PRESCRIPTION
        </Text>
        <Text
          style={tw`text-sm font-semibold self-start mt-[2%] text-gray-600`}>
          Upload a Prescription and Tell Us What you Need. We do the Rest. !
        </Text>
        <View
          style={tw`mt-[5%] w-full self-start flex flex-row justify-between`}>
          <View>
            <Text
              style={tw`text-sm font-semibold self-start mt-[2%] text-gray-600`}>
              Flat 25% OFF ON
            </Text>
            <Text
              style={tw`text-sm font-semibold self-start mt-[2%] text-gray-600`}>
              MEDICINES
            </Text>
          </View>
          <TouchableOpacity
            style={tw`py-[2%] px-[7%] mr-[7%] bg-sky-500 shadow-lg flex flex-row rounded-xl justify-center items-center`}>
            <Text
              style={tw`text-lg font-semibold self-start mt-[2%] text-white`}>
              ORDER NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MessageScreen;
