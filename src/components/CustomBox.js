import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomBox = ({ imagePath, title, title1, width, height, border, color, fontSize }) => (
  <View style={[styles.box, { width, height }, border && styles.boxWithBorder]}>
    {title1 && <Text style={[styles.title1, { color: color || 'white' }]}>{title1}</Text>}
    <Image source={imagePath} style={styles.image} />
    <Text style={[styles.title, { color: color || 'black', fontSize: fontSize || 14 }]}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 3
  },
  boxWithBorder: {
    borderWidth: 0.2,
    borderColor: 'gray',
  },
  image: {
    width: 38,
    height: 38,
    marginBottom: 10,
  },
  title: {
    fontWeight: '600',
    textAlign: 'center',
  },
  title1: {
    fontSize: 13,
  },
});

export default CustomBox;