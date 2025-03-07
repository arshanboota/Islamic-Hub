import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const CustomComponent = ({ iconName, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name={iconName} size={30} color="white" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default CustomComponent;
