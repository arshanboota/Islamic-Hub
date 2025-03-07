import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CounterHeader from '../components/CounterHeader';
import store from '../redux/store';
import { incrementCount } from '../redux/action';
import LinearGradient from 'react-native-linear-gradient';
import { wp,hp } from '../utils/ResponsiveUtils';
import { Ionicons} from '../components/Icon';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  
  const formatNumber = (num) => num.toString().padStart(3, '0');

  return (
    <View style={styles.centeredView}>
      <Text style={styles.dua}>دعاء</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>0:00:34</Text>
      </View>
      <View style={styles.nextView}>
        <Text style={styles.title}>Tasbih Counter</Text>
      </View>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{formatNumber(count)}</Text>
       <View> 
           <LinearGradient
            colors={['hsl(27, 96%, 61%)', 'rgba(0, 35, 0, 1)']}
            start={{ x: 1.8, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.Coverview}
          >
            <TouchableOpacity style={styles.button} onPress={() => dispatch(incrementCount())}>
              <Text style={styles.buttonText}> </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
          <View style={styles.Coverview1}>
          <EvilIcons name="refresh" size={wp(7)} color="white" />
          <AntDesign name="inbox" size={wp(5)} color="white" />
          <FontAwesome6 name="clock-rotate-left" size={wp(4.5)} color="white" /> 
          <Ionicons name="moon-outline" size={wp(5)} color="white" /> 
        </View> 
      </View>
    </View>
  );
};

const TasbihCounter = () => {
  const navigation = useNavigation();

  const handleIconPress = () => {
    navigation.navigate('Donation'); 
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterHeader text={" Tasbih Counter"} iconName="arrow-back" onPress={handleIconPress} />
        <View style={styles.innerview}>
          <Text style={styles.text}>Set: 1</Text>
          <Text style={styles.text}>Range: 100</Text>
        </View>
        <Counter />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202442',
    padding: wp(5),
  },
  title: {
    fontSize: wp(5.6),
    color: 'white',
    paddingBottom: hp(3),
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp(7),
  },
  text: {
    color: 'white',
    fontSize: wp(4.3),
  },
  dua: {
    fontSize: wp(13.3),
    color: 'white',
  },
  timeContainer: {
    backgroundColor: 'rgba(0, 30, 0, 1)',
    borderRadius: wp(5.3),
    paddingVertical: hp(0.7),
    width: wp(25),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(4),
  },
  timeText: {
    fontSize: wp(4.8),
    color: 'white',
  },
  nextView: {
    marginTop: hp(3),
  },
  innerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counterContainer: {
    alignItems: 'center',
    marginTop: hp(-3),
  },
  counterText: {
    fontSize: wp(16),
    color: 'hsl(27, 96%, 61%)',
  },
  Coverview: {
    height: hp(8),
    width: wp(45),
    borderRadius: wp(7.5),
    marginTop: hp(12),
    backgroundColor: 'rgba(0, 35, 0, 1)',
  },
  Coverview1: {
    flex: 0.38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(60),
    borderRadius: wp(6.7),
    marginTop: hp(4),
    backgroundColor: 'rgba(0,10, 0, 1)',
    padding: wp(2.5),
    paddingTop: hp(1.7),
  },
  button: {
    backgroundColor: 'hsl(27, 96%, 61%)',
    padding: wp(2.5),
    borderRadius: wp(14.7),
    width: wp(13),
    height: wp(13),
    position: 'absolute',
    left: wp(27.5),
    top: hp(0.7),
  },
  buttonText: {
    color: 'white',
    fontSize: wp(4.8),
  },
});

export default TasbihCounter;