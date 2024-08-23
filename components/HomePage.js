import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible until the font is loaded

const HomePage = ({ navigation }) => {
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Matemasie': require('../assets/Fonts/Matemasie-Regular.ttf'), // Adjust the path
                'dancing': require('../assets/Fonts/DancingScript-VariableFont_wght.ttf'), // Adjust the path
            });
            setFontsLoaded(true);
            SplashScreen.hideAsync(); // Hide the splash screen once the font is loaded
        };

        loadFonts();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync(); // Ensure splash screen is hidden after fonts are loaded
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // Keep the splash screen visible until fonts are loaded
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Image
                source={require('../assets/Beach.jpg')} 
                className='h-full w-screen'
            />
            <Text className='mt-[-250px] font-semibold text-white text-xl'>
              get ready for 
            </Text>
            <Text className='text-4xl text-white font-bold'>
              New Episode 
            </Text>
            <Text className='text-white font-semibold'>
              Start your New Trip with the Travel Buddy App
            </Text>
            <Text className='text-white font-semibold'>
              100% True Information
            </Text>
            <Text className='bg-white mt-4 py-4 px-12 rounded-full font-semibold' onPress={() => navigation.navigate('Dashboard')}>
              Let's Start
            </Text>
        </View>
    );
};

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

export default HomePage;
