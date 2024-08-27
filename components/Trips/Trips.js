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

      <Text style={styles.backText} onPress={() => navigation.navigate('AllTrips')}>
        Back
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default Trips;
