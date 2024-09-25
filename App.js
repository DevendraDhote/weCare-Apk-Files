import React, {useEffect} from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Reminder from './src/screens/Reminder';
// import Toast, {BaseToast} from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;

const Navigator = () => {
  // const {loggedIn, checking} = useSelector(state => state.loggedInReducer);

  return <LoggedInStack />;
};

const LoggedInStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={'LoginScreen'}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reminder"
          component={Reminder}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};
