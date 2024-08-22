import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const HomePage = () => {
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    const loadFonts = async () => {
      await Font.loadAsync({
        'Matemasie': require('../assets/Fonts/Matemasie-Regular.ttf'), // Adjust the path
      });
      setFontsLoaded(true);
    };
  
    if (!fontsLoaded) {
      return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />;
    }
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
        <Text className='mt-[-70%] text-2xl font-semibold bg-white px-8 py-2 rounded-full text-blue-600' style={{ fontFamily: 'Matemasie'}}>
            Get Started
        </Text>

        <Text className='mt-64 text-blue-500 font-semibold text-2xl' style={{ fontFamily: 'Matemasie'}}>
            Welcome to Travel Buddy
        </Text>
        <Text className='text-blue-600 font-semibold'>
            The Travel Information App
        </Text>
        <Text className='text-xs mt-16'>
            Developed bt JehanKandy
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
        fontFamily: 'Matemasie', // Custom font
        fontSize: 20,
      },
  });


export default HomePage