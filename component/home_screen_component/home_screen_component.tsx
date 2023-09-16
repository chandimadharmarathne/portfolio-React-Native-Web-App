/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Hello from '../../assets/icons/hello.png';
import HireMe from '../../assets/icons/hireMe.png';
import Java from '../../assets/icons/java.png';
import Handshake from '../../assets/icons/handshake.png';
import Rectangle from '../../assets/images/Rectangle.png';
import MyImage from '../../assets/images/myImage.png';

const HomeScreenComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.desktop}>
        <View style={styles.iconContainer}>
          <View style={styles.imageContainer}>
            <Image source={Hello} style={styles.image} />
            <Text style={styles.textOverlay}>Hello, I'm</Text>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Chandima Dharmarathne</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textStyleJob}>Full Stack Developer</Text>
            </View>
            <View style={[styles.textContainer, {marginTop: 47}]}>
              <Text style={styles.textStyleAboutMe}>
                I'm eager to collaborate on your next project,{' '}
              </Text>
              <Text style={styles.textStyleAboutMe}>
                leveraging the latest technologies to drive innovation
              </Text>
              <View style={styles.imageIconContainer}>
                <Text style={styles.textStyleAboutMe}>
                  and bring your development goals to life.
                </Text>
                <Image source={Java} style={styles.icon} />
              </View>
              <View style={styles.imageContainerTwo}>
                <Image source={HireMe} style={styles.imagetwo} />
                <View style={styles.imageIconContainerTwo}>
                  <Text style={styles.textOverlayTwo}>Hire me</Text>
                  <Image source={Handshake} style={styles.handshakeIcon} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
                <Image source={Rectangle} style={styles.imageProfile} />
                <View style={styles.imageIconContainerTwo}>
                  <Image source={MyImage} style={styles.myImage} />
                </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Fix the container at the top
    top: 96,
    left: 0,
    right: 0,
  },
  desktop: {
    backgroundColor: '#ffffff', // Background color
    height: 755, // Height in pixels
    width: '100%', // Full width
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 1,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 1,
  },
  imageIconContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  imageIconContainerTwo: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: -55,
  },
  imageContainer: {
    // Container for image with text overlay
    position: 'relative', // Position relative for absolute positioning of text
    marginLeft: 145,
    marginRight: 330,
    marginTop: 60,
  },
  imageContainerTwo: {
    marginLeft: -50,
    marginRight: 330,
    marginTop: 70,
    alignItems:'center',
  },
  image: {
    height: 84,
    width: 185,
  },
  imagetwo: {
    height: 55,
    width: 185,
    marginTop: 0,
  },
  handshakeIcon: {
    height: 25,
    width: 25,
    marginTop: 15,
    marginLeft:130,
  },
  textOverlay: {
    position: 'absolute', // Position absolute for overlay text
    top: 9, // Adjust top position as needed
    left: 40, // Adjust left position as needed
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  textOverlayTwo: {
    position: 'absolute', // Position absolute for overlay text
    top: 9, // Adjust top position as needed
    left: 20, // Adjust left position as needed
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  textStyle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Arial',
  },
  textStyleJob: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Arial',
    paddingTop: 20,
  },
  textStyleAboutMe: {
    fontSize: 24,
    fontWeight: '400',
    color: 'black',
    fontFamily: 'Istok',
    paddingTop: 5,
  },
  textContainer: {
    height: 40,
    margin: 4,
  },
  profileImageContainer:{
    position: 'relative', // Position relative for absolute positioning of text
    marginLeft: -150,
    marginRight: 30,
    marginTop: 40,
  },
  profileImage:{
    marginLeft: 0,
    marginRight: 0,
    marginTop: 70,
    alignItems:'center',
  },
  imageProfile:{
    height:407,
    width:461,
  },
  myImage: {
    height: 486,
    width: 340,
    marginTop: -430,
    marginLeft:0,
  },
});

export default HomeScreenComponent;
