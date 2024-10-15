import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image, Linking } from 'react-native';

const Sidebar = ({ isVisible, onClose }) => {
  const translateX = useRef(new Animated.Value(-250)).current; // Sidebar initially off-screen

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isVisible ? 0 : -250,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <Animated.View className='pt-10' style={[styles.sidebar, { transform: [{ translateX }] }]}>
      <View style={styles.maincontainer}>
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

        <TouchableOpacity onPress={onClose}>
          <Image 
              source={require('../../assets/Close.png')} 
              style={{ height: 32, width: 32 }} 
              className=''
          />
        </TouchableOpacity>
      </View> 

      <View className='bg-blue-500 h-[1px] mt-2'></View>

      <Text style={styles.sidebarText}>Developer Note</Text>

      <Text className='mt-4'>
        This is First (initial release) of the Project
      </Text>
      <Text className='mt-2'>
        This Project will be update in Future Releases
      </Text>
      <Text>
        Developer: JehanKandy
      </Text>

      <View className='mt-4'>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/jehanweerasuriya').catch(err => console.error('An error occurred', err))}>
            <Text>LinkedIn</Text>
          </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 250,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: -1, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10, // Higher elevation to ensure it appears above other components
    padding: 20,
    zIndex: 100, // Ensure the sidebar appears above other components
  },
  sidebarText: {
    fontSize: 18,
    color: 'red',
    paddingTop: 10,
  },

  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Sidebar;
