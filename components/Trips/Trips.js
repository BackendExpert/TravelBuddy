import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Trips = ({ navigation, route }) => {
  // Extract screenID from route.params
  const { screenID } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        More Places in Sri Lanka: {screenID}
      </Text>

      <Text style={styles.backText} onPress={() => navigation.navigate('Dashboard')}>
        Back
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Trips;
