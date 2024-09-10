import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, TouchableWithoutFeedback } from 'react-native';
import InputField from '../components/InputField';
import SelectBox from '../components/SelectBox';
import DatePickerField from '../components/DatePickerField';
import TimePickerField from '../components/TimePickerField';
import ImagePickerModal from '../components/ImagePickerField';
import { AccountStyle, CommonStyle } from '../styles';
import Header from '../components/Header';

const Account: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string | null>(null);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleOutsidePress = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  }
  const handleImagePicked = (uri: string) => {
    setImageUri(uri);
  };

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  return (
    <SafeAreaView style={CommonStyle.container}>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={CommonStyle.container}>
          <View style={{ zIndex: 1 }}>
            <Header title={'Account'}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              handleOutsidePress={handleOutsidePress}
            />
          </View>

          <View style={CommonStyle.container}>
            <ScrollView style={AccountStyle.container}>

              {/* Circle for Profile Image */}
              <TouchableOpacity onPress={() => setModalVisible(true)} style={AccountStyle.profileContainer}>
                {imageUri ? (
                  <Image source={{ uri: imageUri }} style={AccountStyle.profileImage} />
                ) : (
                  <Text style={AccountStyle.placeholderText}>Tap to upload</Text>
                )}
              </TouchableOpacity>

              {/* Image Picker Modal */}
              <ImagePickerModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onImagePicked={handleImagePicked}
              />
              <InputField label="Name" value={name} onChangeText={setName} placeholder="Enter your name" />

              <SelectBox label="Gender" selectedValue={gender} onValueChange={setGender} items={genderOptions} />

              <DatePickerField label="Date of Birth" value={dateOfBirth} setDate={setDateOfBirth} />

              <TimePickerField label="Preferred Time" value={time} setTime={setTime} />
            </ScrollView>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>

  );
};

export default Account;
