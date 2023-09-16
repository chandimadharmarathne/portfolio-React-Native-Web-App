import React from 'react';
import {Dimensions, StyleSheet, Text, View, ScrollView} from 'react-native';
import MainImage from './component/main_image_component/main_image_component';
import MenuBarComponent from './component/menu_bar_component/menu_bar_component';

const {height} = Dimensions.get('screen');

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <MenuBarComponent />
      <ScrollView style={styles.scrollView}>
        <MainImage />
        <View style={styles.center}>
          <Text>Hello My Web</Text>
        </View>
      </ScrollView>
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
