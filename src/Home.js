import React from 'react';
import {SafeAreaView} from 'react-native';
import Colors from '../src/constants/Colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FileScreen from './screens/FileScreen';
import MessageScreen from './screens/MessageScreen';
import UploadPrescription from './screens/UploadPrescription';
import Icon, {Icons} from './components/Icon';
import {tw} from './utils';
import Main from './screens/Main';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={{
          swipeEnabled: false,
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            position: 'absolute',
            top: 0,
            height: 6,
            backgroundColor: 'skyblue',
          },
          tabBarItemStyle: {flexDirection: 'row'},
          tabBarStyle: {height: 65, justifyContent: 'center'},
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.primaryLite,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon type={Icons.Entypo} name="home" color="grey" size={25} />
            ),
          }}
          name="Homee"
          component={Main}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                type={Icons.Entypo}
                name="briefcase"
                color="grey"
                size={24}
              />
            ),
          }}
          name="File"
          component={FileScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon type={Icons.Entypo} name="browser" color="grey" size={24} />
            ),
          }}
          name="Message"
          component={MessageScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon type={Icons.Entypo} name="message" color="grey" size={27} />
            ),
          }}
          name="Notes"
          component={UploadPrescription}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
