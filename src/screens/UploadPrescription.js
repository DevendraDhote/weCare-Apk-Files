import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {tw} from '../utils';
import TopBarTwo from '../components/TopbarTwo';
import {useNavigation} from '@react-navigation/native';
import {Cards} from '../components/Cards';
import DocumentPicker from 'react-native-document-picker';

const UploadPrescription = () => {
  const navigation = useNavigation();

  const [fileName, setFileName] = useState(null);

  const data = [
    {
      title: 'Path lab pharmacy',
      distance: '8',
      ratings: '4.2',
    },
    {
      title: '24x7 pharmacy',
      distance: '6',
      ratings: '4.2',
    },
    {
      title: 'Ayurveda pharmacy',
      distance: '7.2',
      ratings: '4.2',
    },
    {
      title: 'Nitin pharmacy',
      distance: '15',
      ratings: '4.2',
    },
  ];

  const handlePickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileName(res[0].name);
      alert('success');
      // Handle the picked document (e.g., upload it to a server)
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled document picker');
      } else {
        console.log('Error picking document:', error);
      }
    }
  };

  return (
    <View
      Style={tw`flex flex-col bg-white w-full h-full justify-start items-center`}>
      <TopBarTwo text={'Mohali'} navigation={navigation} />
      <View
        style={tw`w-[95%] h-full flex flex-col items-center p-[0.9%] self-center justify-start`}>
        <View style={tw`flex w-[95%] mt-[5%] self-start h-[25%]`}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            keyExtractor={(item, index) => {
              return index;
            }}
            renderItem={({item, index}) => (
              <View style={tw`h-full ml-3 aspect-square rounded-md`}>
                <Cards
                  title={item.title}
                  distance={item.distance}
                  ratings={item.ratings}
                  source={require('../assets/img1.jpg')}
                />
              </View>
            )}
          />
        </View>
        <Text style={tw`text-2xl font-semibold mt-[5%] self-center text-black`}>
          Upload Prescription
        </Text>
        <Text
          style={tw`text-sm font-semibold self-center mt-[2%] text-gray-600`}>
          We will show the pharmacy that fits as per
        </Text>
        <Text style={tw`text-sm font-semibold self-center text-gray-600`}>
          your prescription.
        </Text>
        <View
          style={tw`flex flex-row justify-between items-center mt-[10%] bg-white h-[25%] w-full border rounded-lg`}>
          <TouchableOpacity
            style={tw`w-[45%] flex flex-col justify-center items-center`}
            onPress={handlePickDocument}>
            <Image
              source={require('../assets/gifs/file.png')}
              style={tw`w-[50%] h-[50%]`}
              resizeMode="contain"
            />
            <Text style={tw`text-sm font-semibold text-gray-600`}>
              Upload Link
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`w-[45%] flex flex-col justify-center items-center`}
            onPress={handlePickDocument}>
            <Image
              source={require('../assets/gifs/upload.png')}
              style={tw`w-[50%] h-[50%]`}
              resizeMode="contain"
            />
            <Text style={tw`text-sm font-semibold text-gray-600`}>
              Upload File
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={tw`text-sm font-semibold p-[2%] text-gray-600`}>
          {fileName === null ? 'No file choosen....' : fileName}
        </Text>
        <TouchableOpacity
          onPress={() => {
            alert('File uploaded');
            setFileName('');
          }}
          style={tw`bg-green-400 py-[3%] mt-[10%] w-full rounded-lg`}>
          <Text style={tw`text-xl font-semibold self-center text-white`}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadPrescription;
