import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'

const AllTrips = ({ navigation }) => {
    const DataPlaces = [
        {
            id: 1,
            name: "Kandy",
            Locate: "Center of Sri Lanka",
            bgImg: 'https://cdn.pixabay.com/photo/2013/11/03/11/58/temple-204803_1280.jpg'
        },
        {
            id: 2,
            name: "Nuwara Eliya",
            Locate: "Little England",
            bgImg: 'https://c0.wallpaperflare.com/preview/309/300/52/nuwara-eliya-sri-lanka-green-mountain.jpg'
        },
        {
            id: 3,
            name: "Ella",
            Locate: "on Kandy-Badulla Railway",
            bgImg: 'https://c0.wallpaperflare.com/preview/665/67/799/ella-kandy-sri-lanka-asia.jpg'
        },
        {
            id: 4,
            name: "Pasikuda Beach",
            Locate: "35 kilometers northwest of Batticaloa",
            bgImg: 'https://c0.wallpaperflare.com/preview/152/775/759/sri-lanka-kalkudah-pasikuda-rd-sea.jpg'
        },
        {
            id: 5,
            name: "Arugam Bay Beach",
            Locate: "Ampara",
            bgImg: 'https://c4.wallpaperflare.com/wallpaper/635/462/366/sri-lanka-nature-beach-waves-wallpaper-preview.jpg'
        },
        {
            id: 6,
            name: "Jaffna",
            Locate: "Northern Sri Lanka",
            bgImg: 'https://c1.wallpaperflare.com/preview/451/940/978/temple-hinduism-religion-architecture.jpg'
        },
        {
            id: 7,
            name: "Anuradhapura",
            Locate: "North Central of Sri Lanka",
            bgImg: 'https://c1.wallpaperflare.com/preview/645/468/30/sri-lanka-anuradhapura-temple-buddhism.jpg'
        },
    ]

    return (
        <View style={{ marginTop: 40, marginHorizontal: 16 }}>
            <View style={styles.header} className='rounded-full'>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Image 
                        source={require('../../assets/Back.png')} 
                        style={{ height: 32, width: 32 }} 
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    All Destinations 
                </Text>
            </View>

            <View style={{ marginBottom: 16 }}>
                <Text>
                    Following are the Most Tourist Visited Places in Sri Lanka
                </Text>
                <Text style={styles.warningText}>
                    If you are new to Sri Lanka, please go to the Dashboard - Important
                </Text>
            </View>

            <ScrollView className='mb-40' showsVerticalScrollIndicator={false}>
                {DataPlaces.map((place) => (
                    <TouchableOpacity key={place.id}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: place.bgImg }}
                                style={styles.image}
                            />
                            <View style={styles.textOverlay}>
                                <Text style={styles.placeName}>
                                    {place.name}
                                </Text>
                                <Text style={styles.placeLocation}>
                                    {place.Locate}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#e4e4e7',
        height: 50,
        paddingLeft: 20
    },
    headerText: {
        paddingTop: 4,
        marginLeft: 16,
        fontSize: 20,
        fontWeight: '600',
        color: '#1E40AF', // Tailwind's blue-500
    },
    warningText: {
        color: '#EF4444', // Tailwind's red-500
        fontWeight: '600',
    },
    imageContainer: {
        marginBottom: 16,
        borderRadius: 20,
        overflow: 'hidden', // Ensures rounded corners
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    textOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
        alignItems: 'center',
    },
    placeName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    placeLocation: {
        color: 'white',
        fontSize: 16,
    },
});

export default AllTrips
