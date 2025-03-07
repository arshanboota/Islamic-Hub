import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from './Icon';

const CounterHeader = ({ text, iconName, onPress }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
        <Ionicons name={iconName} size={30} color="white" />
        </TouchableOpacity>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  
  },
  title: {
    color: 'white',
    fontSize: 21,
    marginHorizontal:15
  },
});

export default CounterHeader;
