import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {tw} from '../utils';
import {FormInputComponent} from '../components/FormInputComponent';
import NextButton from '../components/NextButton';
import {useNavigation} from '@react-navigation/native';
import {registerAuth} from '../api/authApi';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (email === '' || password === '' || username === '') {
      console.warn('Please fill all the fields');
    } else {
      const res = await registerAuth(username, email, password);
      if (res.success === true) {
        navigation.navigate('Home');
      }
      if (res.message === 'user already exist') {
        alert('This email already exist, Please SignIn');
        setEmail('');
        setPassword('');
        setUsername('');
      }
    }
  };

  return (
    <View Style={tw`flex-1 bg-white justify-start items-center w-full h-full`}>
      <View style={tw`w-full flex flex-col items-center justify-center`}>
        <Text style={tw`text-black text-xl font-semibold mt-[10%]`}>
          Register Now
        </Text>
        <Text style={tw`text-black text-4xl font-semibold m-[15%]`}>
          Healthcare
        </Text>
        <FormInputComponent
          title="Name"
          value={username}
          keyboardType={'text'}
          onChangeText={setUsername}
        />

        <FormInputComponent
          title="Email-Id"
          value={email}
          keyboardType={'email'}
          onChangeText={setEmail}
        />
        <FormInputComponent
          title="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <View style={tw`flex flex-row items-center mt-[15%] mb-[20%]`}>
          <Text style={tw`text-black text-sm font-semibold`}>
            Already a Member :
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={tw`self-end`}>
            <Text style={tw`text-blue-600  text-sm font-semibold`}>
              {' '}
              Click here to SignIn
            </Text>
          </TouchableOpacity>
        </View>
        <NextButton
          style={tw`mt-[10%]`}
          name="REGISTER"
          onPress={() => handleRegister()}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
