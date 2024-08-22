import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const HomePage = () => {
  return (
    <View style={styles.container}>
        <Image
            source={require('../assets/TravelImg.jpg')} 
            className='h-[80vh] w-screen'
            style={{
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 60
            }}
        >

            
        </Image>
        <Text className='mt-[-70%] text-2xl font-semibold bg-white px-8 py-2 rounded-full text-blue-600'>
            Get Started
        </Text>

        <Text className='mt-64 text-blue-500 font-semibold text-2xl'>
            Welcome to Travel Buddy
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        color: '#000',
        fontSize: 20,
    },
  });


export default HomePage