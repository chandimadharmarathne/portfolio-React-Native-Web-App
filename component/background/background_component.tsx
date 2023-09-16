/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import myImage from '../../assets/images/my.png';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 0,
    justifyContent: 'space-between',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 70,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 200,
  },
});

const Background_component: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={myImage} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default Background_component; // Fix the export statement
