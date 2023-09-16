/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';

import Github from '../../assets/icons/github.png';
import Linkedin from '../../assets/icons/linkedin.png';
import Instagram from '../../assets/icons/instagram.png';
import CV from '../../assets/icons/cv.png';

const openWebsiteInNewTab = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

const MenuBarComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => openWebsiteInNewTab('https://github.com/chandimadharmarathne')}>
          <Image source={Github} style={styles.icon} />
        </TouchableOpacity>
        <a href="https://github.com/chandimadharmarathne" target="_blank" rel="noopener noreferrer">
        <Image source={Linkedin} style={styles.icon} />
        </a>
        <TouchableOpacity onPress={() => openWebsiteInNewTab('https://instagram.com')}>
          <Image source={Instagram} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openWebsiteInNewTab('https://example.com')}>
          <Image source={CV} style={styles.icon} />
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {width: 88}]}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {width: 95}]}>About</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {width: 106}]}>Services</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {width: 80}]}>Skills</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {width: 102}]}>Portfolio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.textContainer, {paddingRight: 224}]}>
            <Text style={[styles.textStyle, {width: 93}]}>Contact</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Fix the container at the top
    top: 0,
    left: 0,
    right: 0,
  },
  menuBar: {
    backgroundColor: '#d0bfff', // Background color
    height: 96, // Height in pixels
    width: '100%', // Full width
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginTop: 0,
    flexDirection: 'row',
    marginLeft: 66,
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 21,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  textContainer: {
    height: 37,
    margin: 4,
  },
});

export default MenuBarComponent;
