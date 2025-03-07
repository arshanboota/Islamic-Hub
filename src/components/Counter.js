import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount } from './src/redux/action';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const formatNumber = (num) => {
    return num.toString().padStart(3, '0');
  };

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
        <View style={styles.coverView}>
          <View style={styles.gradientView}>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(incrementCount())}>
              <Text style={styles.buttonText}>Count</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  dua: {
    fontSize: 50,
    color: 'white',
  },
  timeContainer: {
    backgroundColor: 'rgba(0, 30, 0, 1)',
    borderRadius: 20,
    paddingVertical: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  timeText: {
    fontSize: 18,
    color: 'white',
  },
  nextView: {
    marginTop: 30,
    marginBottom: 0,
  },
  counterContainer: {
    alignItems: 'center',
    marginTop: -25,
  },
  counterText: {
    fontSize: 60,
    color: 'white',
  },
  coverView: {
    height: 65,
    width: 150,
    borderRadius: 28,
    marginTop: 100,
    overflow: 'hidden', // Ensure child views stay within bounds
    backgroundColor: 'rgba(0, 35, 0, 1)',
  },
  gradientView: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(27, 96%, 61%)',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Counter;
