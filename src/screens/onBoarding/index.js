// OnboardingSlider.js
import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../../theme';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Wherever You Are Health Is Number One',
    subtitle: 'There is no instant way to a healthy life',
    image: images.slide1,
    buttonText: 'Next'
  },
  {
    id: '2',
    title: 'Wherever You Are Health Is Number One',
    subtitle: 'There is no instant way to a healthy life',
    image: images.slide2, 
    buttonText: 'Next'
  },
  {
    id: '3',
    title: 'Wherever You Are Health Is Number One',
    subtitle: 'There is no instant way to a healthy life',
    image: images.slide3, 
    buttonText: 'Get Started'
  }
];

const Slide = ({ item }) => (
  <View style={styles.slide}>
    <Image source={item.image} style={styles.image} />
    <LinearGradient colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)']} style={styles.overlay}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{item.buttonText}</Text>
      </TouchableOpacity>
    </LinearGradient>
  </View>
);

const OnboardingSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }) => {
    return <Slide item={item} />;
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setActiveSlide(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
      />
      <View style={styles.pagination}>
        {slides.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                { opacity: index === activeSlide ? 1 : 0.4 },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Change this to match your design
  },
  slide: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  overlay: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9DC639', // Change this to match your design
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#9DC639', // Change this to match your design
    marginHorizontal: 5,
  }
});

export default OnboardingSlider;
