import React from 'react';
import {Dimensions, StyleSheet, View, ScrollView} from 'react-native';
import MenuBarComponent from './component/menu_bar_component/menu_bar_component';
import HomeScreenComponent from './component/home_screen_component/home_screen_component';
import AboutScreenComponent from './component/about_screen_component/about_screen_component';

const {height} = Dimensions.get('screen');

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HomeScreenComponent />
        <AboutScreenComponent />
      </ScrollView>
      <MenuBarComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  scrollView: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
});

export default App;
