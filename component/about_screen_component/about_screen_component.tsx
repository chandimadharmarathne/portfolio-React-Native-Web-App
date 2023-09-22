/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import MyImage from '../../assets/images/my.png';
import ReactI from '../../assets/icons/ReactI.png';

const AboutScreenComponent: React.FC = () => {
  return (
    <div id="about">
      <View style={styles.container}>
        <View style={styles.aboutScreen}>
          <Text style={styles.textStyle}>About Me</Text>
          <View style={styles.detailContainer}>
            <View style={styles.imageContainer}>
              <View style={styles.imageRectangle}>
                <Image source={MyImage} style={styles.imageStyle} />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.aboutText}>
                I'm an Electronics and Information Technology student with a
                strong passion for software development. Committed to continuous
                learning, I stay current with cutting-edge technologies. Through
                university projects, I've honed my skills and embraced the
                importance of effective communication in team collaboration. I
                thrive on learning from my mistakes, seeing them as
                opportunities for growth. My goal is to become an outstanding
                Software Engineer, where innovation, collaboration, and
                self-improvement are at the core of my journey.
                <Image source={ReactI} style={styles.icon} />
              </Text>
            </View>
          </View>
        </View>
      </View>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Fix the container at the top
    top: 766,
    left: 0,
    right: 0,
  },
  aboutScreen: {
    backgroundColor: '#fff3da', // Background color
    height: 755, // Height in pixels
    width: '100%', // Full width
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginTop: 50,
    marginLeft: 0,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginTop: 1,
    marginLeft: 108,
    marginRight: 50,
  },
  textContainer: {
    height: '100%',
    width: '55%',
    marginTop: 0,
  },
  textStyle: {
    fontSize: 50,
    fontWeight: '700',
    color: 'black',
    marginTop: 42,
  },
  aboutText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    textAlign: 'justify',
    lineHeight: 50,
  },
  imageRectangle: {
    backgroundColor: '#DFCCFB',
    width: 350,
    height: 350,
  },
  imageStyle: {
    width: 350,
    height: 350,
    marginLeft: 0,
  },
  textDContainer: {
    height: 37,
    margin: 0,
  },
  icon: {
    height: 31,
    width: 35,
    marginLeft: 1,
  },
});

export default AboutScreenComponent;
