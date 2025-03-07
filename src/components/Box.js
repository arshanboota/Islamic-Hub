import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box = ({ title, description, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
});

export default Box;
