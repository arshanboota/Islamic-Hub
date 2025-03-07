import { Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Box from '../components/Box';
import CounterHeader from '../components/CounterHeader';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const wp = (percentage) => (width * percentage) / 100;
const hp = (percentage) => (height * percentage) / 100;

export { wp, hp, width, height };

const Donation = () => {
  const [selectedOption, setSelectedOption] = useState('Monthly');
  const navigation = useNavigation();
  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };
  const handleIconPress = () => {
    navigation.navigate('TasbihCounter'); 
  };
  return (
    <View style={styles.maincontainer}>
      <CounterHeader text={"Donation"} iconName="arrow-back" onPress={handleIconPress} />
      <Text style={styles.subheader}>Subscription Plans</Text>
      <View style={styles.outerOval}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.option,
              selectedOption === 'Monthly' && styles.selectedOption,
            ]}
            onPress={() => handleOptionPress('Monthly')}
          >
            <Text style={[
              styles.optionText,
              selectedOption === 'Monthly' && styles.selectedOptionText,
            ]}>
              Monthly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.option,
              selectedOption === 'Annually' && styles.selectedOption,
            ]}
            onPress={() => handleOptionPress('Annually')}
          >
            <Text style={[
              styles.optionText,
              selectedOption === 'Annually' && styles.selectedOptionText,
            ]}>
              Annually
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Box 
        color='#353A61'
        title={selectedOption === 'Annually' ? 'Donation Annually' : 'Lite Donation'}
        description="A support toward our labor and ad-free experience." 
      />
      <Box       
        color='hsl(20, 80%, 61%)'
        title={selectedOption === 'Annually' ? 'Donor Annually' : 'True Donor'}
        description="A support toward our labor and ad-free experience." 
      />
      <Box 
        color='#353A61'
        title={selectedOption === 'Annually' ? 'Supportive Annually' : 'Supportive'}
        description="A support toward our labor and ad-free experience." 
      />
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Text style={{ color: 'lightgray', textAlign: 'center' }}>
          Donor program is associated with subscription plan to make the app Ad-Free and continued on development. Monthly subscriptions renew every month. 
          14 days of the trial period after the subscription.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#202442',
    padding: wp(3),
  },
  subheader: {
    fontSize: wp(5),
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    margin: hp(1.2),
  },
  outerOval: {
    backgroundColor: '#404464',
    borderRadius: wp(7.5),
    padding: hp(1.2),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1.2),
    marginVertical: hp(0.75),
    width: wp(67),
    alignSelf: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  option: {
    backgroundColor: '#404464',
    borderRadius: wp(6.25),
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(5),
    marginHorizontal: wp(1.25),
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: 'white',
  },
  optionText: {
    color: 'white',
    fontSize: wp(3.75),
    fontWeight: '500',
  },
  selectedOptionText: {
    color: '#202442',
  },
});

export default Donation;
