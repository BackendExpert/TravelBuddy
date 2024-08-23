import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const Search = ({ navigation }) => {
  return (
    <View className='mt-10 mx-6'>
        <View style={styles.container}>
            <Text>Search</Text>      
            <Text>Search</Text>         
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
    
});

export default Search