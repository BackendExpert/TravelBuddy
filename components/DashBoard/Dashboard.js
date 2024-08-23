// Dashboard.js
import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Sidebar from './Sidebar'; // Import the Sidebar component

const Dashboard = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Matemasie': require('../../assets/Fonts/Matemasie-Regular.ttf'),
        'dancing': require('../../assets/Fonts/DancingScript-VariableFont_wght.ttf'),
      });
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    };

    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.maincontainer} className='pt-10'>
      <Sidebar isVisible={sidebarVisible} onClose={toggleSidebar} />
      <View style={styles.header} className='mx-6'>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <Image 
            source={require('../../assets/Menu.png')} 
            style={{ height: 20, width: 20 }} 
          />
        </TouchableOpacity>
        <Text 
          style={{ 
            fontFamily: 'dancing',
            fontWeight: '600',
            fontSize: 20,
            transform: [{ rotate: '-8deg' }],
            color: 'blue',
          }}>
          Travel Buddy
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image 
            source={require('../../assets/Home.png')} 
            style={{ height: 32, width: 32 }} 
          />
        </TouchableOpacity>
      </View>
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    position: 'relative', // Ensures the sidebar is positioned relative to this container
    overflow: 'hidden', // Prevents overflow of content
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    height: '100%',
  },
});

export default Dashboard;
