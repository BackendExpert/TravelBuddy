import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

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
    <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
      <Text style={styles.sidebarText}>Sidebar Content</Text>
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
  closeButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#333',
  },
  sidebarText: {
    fontSize: 18,
    color: '#333',
  },
});

export default Sidebar;
