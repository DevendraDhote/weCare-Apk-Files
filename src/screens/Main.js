import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {tw} from '../utils';
import TopBar from '../components/TopBar';
import {CustomBtn} from '../components/CustomBtn';
// import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   alert('hello');
  // }, []);

  const slideAnim = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    // Define animation configuration
    const animationConfig = {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    };

    Animated.timing(slideAnim, animationConfig).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slideAnimRight = useRef(new Animated.Value(1000)).current;

  useEffect(() => {
    const animationConfig = {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    };

    // Trigger animation
    Animated.timing(slideAnimRight, animationConfig).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animationConfig = {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    };

    // Trigger animation
    Animated.timing(animatedValue, animationConfig).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animationConfig = {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    };

    // Trigger animation
    Animated.timing(fadeAnim, animationConfig).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run only once when component mounts

  return (
    <View
      Style={tw`flex flex-col bg-white w-full h-full justify-start items-center`}>
      <TopBar text={'Edit Business Account'} />
      <View
        style={tw`w-[95%] h-full flex flex-col items-center p-[0.9%] self-center justify-start`}>
        <Animated.View
          style={[
            tw`flex flex-row w-full mt-[3%] justify-between items-center`,
            {
              opacity: animatedValue,
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0], // from top (opacity 0) to bottom (opacity 1)
                  }),
                },
              ],
            },
          ]}>
          <View
            style={tw`flex flex-row w-full mt-[3%] justify-between items-center`}>
            <CustomBtn
              text={'Questions'}
              source={require('../assets/question.png')}
            />
            <CustomBtn
              onPress={() => navigation.navigate('Reminder')}
              navigation={navigation}
              text={'Reminders'}
              source={require('../assets/reminder.png')}
            />
          </View>
        </Animated.View>

        <Animated.View
          style={[
            tw`flex flex-row w-full mt-[3%] justify-between items-center`,
            {
              opacity: animatedValue,
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0], // from top (opacity 0) to bottom (opacity 1)
                  }),
                },
              ],
            },
          ]}>
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
        </Animated.View>
        <Animated.View
          style={[
            {
              opacity: fadeAnim,
            },
          ]}>
          <Text
            style={tw`text-lg font-semibold self-start mt-[10%] text-black`}>
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
        </Animated.View>
        <Animated.View
          style={[
            tw`w-full h-[20%] rounded-2xl mt-[5%] py-[2.5%] flex flex-row items-center px-[4%] bg-green-300`,
            {
              transform: [{translateX: slideAnim}],
            },
          ]}>
          <View style={tw`w-[75%]`}>
            <Text style={tw`text-lg font-bold self-start  text-black`}>
              Get the Best
            </Text>
            <Text style={tw`text-lg font-bold self-start  text-black`}>
              Medical Service
            </Text>
            <Text style={tw`text-sm self-start  text-black`}>
              Rem illum facere quo corporis Quis in saepe itaque ut quos
              pariatur. Qui numquam rerum hic repudiandae rerum id amet tempore
              nam molestias omnis
            </Text>
          </View>
          <Image
            source={require('../assets/doctor.png')}
            style={tw`w-43 ml-[-10%]`}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View
          style={[
            tw`w-full h-[20%] rounded-2xl mt-[5%] py-[2.5%] flex flex-row items-center px-[4%] bg-indigo-300`,
            {
              transform: [{translateX: slideAnimRight}],
            },
          ]}>
          <Text
            style={[
              tw` mt-[5%] font-bold self-start text-black`,
              {transform: [{rotate: '-90deg'}]},
            ]}>
            UPTO
          </Text>
          <View style={tw`w-[60%]`}>
            <Text style={tw`text-5xl font-bold self-start text-black`}>
              80%
            </Text>
            <Text style={tw`text-lg font-bold mt-[-3%] self-start text-black`}>
              offer
            </Text>
            <Text style={tw`text-lg ml-[-8%] font-bold self-start text-black`}>
              On Health Products
            </Text>
            <TouchableOpacity
              style={tw`py-[2%] w-[65%] ml-[-8%] bg-sky-500 shadow-lg flex flex-row rounded-xl justify-center items-center`}>
              <Text style={tw`text-lg font-semibold self-start text-white`}>
                SHOP NOW
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../assets/vitamins.png')}
            style={tw`w-27 ml-[-1.5%]`}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default Main;
