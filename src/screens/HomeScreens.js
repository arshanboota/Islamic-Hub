import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
// import HomeHeader from '../components/HomeHeader';
import OnboardingCarousel from '../components/OnboardingCarousel';
import CustomBox from '../components/CustomBox';
import CountryPicker from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const wp = (percentage) => (width * percentage) / 100;
const hp = (percentage) => (height * percentage) / 100;

export { wp, hp, width, height };

const HomeScreens = () => {
  const [countryCode, setCountryCode] = useState(null);
  const [country, setCountry] = useState(null);
  const [isCountryPickerVisible, setCountryPickerVisible] = useState(false);
  const navigation = useNavigation();
  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setCountryPickerVisible(false);
  };

  const onOpenCountryPicker = () => {
    setCountryPickerVisible(true);
  };

  const handleIconPress = () => {
    navigation.goBack(); // or any other navigation action
  };

  return (
    <View style={styles.container}>
       {/* <HeaderComponent text="Your Header Text" iconName={require('../assets/your-icon.png')} onPress={handleIconPress} /> */}
      <OnboardingCarousel />
      <View style={styles.subcontainer}>
        <CustomBox imagePath={require('../assets/images/Quran.jpeg')} title="Tasbih" width="30%" height="23%" border />
        <CustomBox imagePath={require('../assets/images/hadith.jpeg')} title="Hadith" width="30%" height="23%" border />
        <CustomBox imagePath={require('../assets/images/dua.jpeg')} title="Dua" width="30%" height="23%" border />
        <CustomBox imagePath={require('../assets/images/alquran.jpeg')} title="Al-Quran" width="30%" height="23%" border />
        <CustomBox imagePath={require('../assets/images/walpaper.jpeg')} title="Wallpaper" width="30%" height="23%" border />
        <CustomBox imagePath={require('../assets/images/don.png')} title="Donation" width="30%" height="23%" border />

        <View style={styles.subcontainer1}>
          <View style={styles.countryPickerContainer}>
            <TouchableOpacity onPress={onOpenCountryPicker} style={styles.countryButton}>
              <Text style={styles.countryButtonText}>
                {country ? country.name : 'Select Country'}
              </Text>
            </TouchableOpacity>
            {isCountryPickerVisible && (
              <CountryPicker
                countryCode={countryCode}
                withFlag
                withCountryNameButton
                withFilter
                withCallingCode
                onSelect={onSelectCountry}
                visible={isCountryPickerVisible}
                onClose={() => setCountryPickerVisible(false)}
                containerButtonStyle={styles.countryPicker}
              />
            )}
          </View>

          <Text style={styles.subcontainer1Title}>Namaz Timings{"\n"}</Text>
          <CustomBox imagePath={require('../assets/images/b.png')} title="4:20 AM" title1="Fajr" width="19%" height="40%" color="white" fontSize={10} />
          <CustomBox imagePath={require('../assets/images/s.png')} title="1:00 PM" title1="Dhuhr" width="18%" height="40%" color="white" fontSize={10} />
          <CustomBox imagePath={require('../assets/images/s.png')} title="4:00 PM" title1="Asr" width="18%" height="40%" color="white" fontSize={10} />
          <CustomBox imagePath={require('../assets/images/b.png')} title="6:45 PM" title1="Mgrib" width="18%" height="40%" color="white" fontSize={10} />
          <CustomBox imagePath={require('../assets/images/b.png')} title="8:00 PM" title1="Isha" width="18%" height="40%" color="white" fontSize={10} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202442',
  },
  subcontainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTopStartRadius: wp(5),
    borderTopRightRadius: wp(5),
    padding: wp(2.5),
    marginTop: hp(-25),
  },
  subcontainer1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#202442',
    justifyContent: 'space-between',
    borderTopStartRadius: wp(5),
    borderTopRightRadius: wp(5),
    padding: wp(4),
  },
  subcontainer1Title: {
    fontSize: wp(4.5),
    color: 'white',
    textAlign: 'center',
    width: '100%',
    marginTop: hp(0.25),
  },
  countryPickerContainer: {
    marginTop: hp(-1.125),
    alignItems: 'center',
    left: wp(18.5),
  },
  countryButton: {
    backgroundColor: '#404464',
    borderRadius: wp(6.25),
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(7.5),
    alignItems: 'center',
  },
  countryButtonText: {
    color: 'white',
    fontSize: wp(4.25),
  },
});

export default HomeScreens;
