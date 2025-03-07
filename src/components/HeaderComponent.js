import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = ({ text, iconName, onPress, additionalImage }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={iconName}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{text}</Text>
      {additionalImage && (
        <Image
          source={additionalImage}
          style={styles.additionalImage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  additionalImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default HeaderComponent;
