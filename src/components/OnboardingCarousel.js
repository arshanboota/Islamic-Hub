import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const carouselData = [
  { id: '1', title: 'Remember Allah!', description: 'Start Tasbih \nCounter' },
  { id: '2', title: 'Hello', description: 'Learn more about the functionalities and how to use them.' },
  { id: '3', title: 'Get Started', description: 'Let’s get started with your journey on our app.' },
];

const OnboardingCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const renderDots = () => {
    return carouselData.map((_, index) => (
      <View
        key={index.toString()}
        style={[
          styles.dot,
          { backgroundColor: index === activeIndex ? 'hsl(27, 96%, 61%)' : 'gray' }
        ]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          {carouselData.map((item) => (
            <View key={item.id} style={styles.slide}>
              <View style={styles.box}>
                <Text style={styles.description}>{item.title}</Text>
                <Text style={styles.title}>{item.description}</Text>
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>0:00:34</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.dotContainer}>{renderDots()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202442',
  },
  carouselContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width: width,
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'hsl(27, 96%, 61%)',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    height: '63%',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#202442',
  },
  description: {
    fontSize: 16,
    color: '#202442',
    marginTop: 10,
  },
  timeContainer: {
    backgroundColor: 'rgba(0, 30, 0, 1)',
    borderRadius: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  timeText: {
    fontSize: 18,
    color: 'white',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#202442',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  dot: {
    width: 25,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default OnboardingCarousel;
