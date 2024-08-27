import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import '../../assets/API/AllData.json'


const AllTrips = ({ navigation }) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
      // Fetch data from the API
    //   fetch('../../assets/API/AllData.json') // Replace with your API URL
    //     .then((response) => response.json())
    //     .then((data) => setLocations(data))
    //     .catch((error) => console.error('Error fetching data:', error));

        const data = require('../../assets/API/AllData.json');
        setLocations(data);
    }, []);

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



            <ScrollView className='mb-20' showsVerticalScrollIndicator={false}>
                {locations.map((place) => (
                    <TouchableOpacity key={place.id} onPress={() => navigation.navigate('OneTrip', {screenID: place.id} )}>
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
