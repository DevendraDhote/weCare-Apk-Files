import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {tw} from '../utils';
import {FormInputComponent} from '../components/FormInputComponent';
import NextButton from '../components/NextButton';
import {useNavigation} from '@react-navigation/native';
import {loginAuth} from '../api/authApi';
// import Toast from 'react-native-toast-message';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === '' || password === '') {
      console.warn('Please fill all the fields');
    } else {
      const res = await loginAuth(username, email, password);
      if (res.success === true) {
        // Toast.show({
        //   type: 'success',
        //   text2: 'Welcome',
        // });
        navigation.navigate('Home');
      } else {
        alert('user Not found');
      }
    }
  };

  return (
    <View Style={tw`flex-1 bg-white justify-start items-center w-full h-full`}>
      <View style={tw`w-full flex flex-col items-center justify-center`}>
        <Text style={tw`text-black text-xl font-semibold mt-[10%]`}>LOGIN</Text>
        <Text style={tw`text-black text-4xl font-semibold m-[20%]`}>
          Healthcare
        </Text>

        <FormInputComponent
          title="Name"
          value={username}
          onChangeText={setUsername}
          keyboardType={'text'}
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
        <TouchableOpacity style={tw`self-end`}>
          <Text style={tw`text-blue-600 text-sm font-semibold mt-[1%] mx-[5%]`}>
            Forgot Password !
          </Text>
        </TouchableOpacity>
        <View style={tw`flex flex-row items-center mt-[15%] mb-[20%]`}>
          <Text style={tw`text-black text-sm font-semibold`}>
            Don't Have an Account :
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            style={tw`self-end`}>
            <Text style={tw`text-blue-600 text-sm font-semibold`}>
              {' '}
              Click here to register
            </Text>
          </TouchableOpacity>
        </View>
        <NextButton
          style={tw`mt-[10%]`}
          name="LOGIN"
          onPress={() => handleLogin()}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
