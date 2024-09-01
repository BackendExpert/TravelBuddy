import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Linking } from 'react-native';

const OneTrip = ({ navigation, route }) => {
    const [LocationOne, SetLocationOne] = useState(null); // Changed to null to handle data loading state

    const { screenID } = route.params;

    useEffect(() => {
        const data = require('../../assets/API/AllData.json');
        
        // Find the location with id = screenID
        const specificLocation = data.find(place => place.id === screenID);
        
        // Set the found location to the state
        SetLocationOne(specificLocation);
    }, []);

    const openGoogleMaps = (link) => {
        // Open the link
        if (link) {
            Linking.openURL(link).catch(err => console.error('An error occurred', err));
        } else {
            console.log("No map link available");
        }
    };

    if (!LocationOne) {
        // Show a loading state or placeholder until data is loaded
        return <Text>Loading...</Text>;
    }

    return (
        <FlatList
            data={LocationOne.places}
            keyExtractor={(item) => item.placeID.toString()}
            ListHeaderComponent={() => (
                <View>
                    <View style={styles.header} className='rounded-full mt-4'>
                        <TouchableOpacity onPress={() => navigation.navigate('AllTrips')}>
                            <Image
                                source={require('../../assets/Back.png')}
                                style={{ height: 32, width: 32 }} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>
                            {LocationOne.name}
                        </Text>
                    </View>
                    <Text>
                        {LocationOne.MainInfo}
                    </Text>
                </View>
            )}
            renderItem={({ item }) => (
                <View>
                    <View>
                        <Text>How to Come to {LocationOne.name}</Text>
                    </View>
                    <View className="my-2">
                        <View className="bg-white rounded-xl shadow-md">
                            <Image
                                source={{ uri: item.PlaceImage }}
                                className='h-40'
                                style={{
                                    borderTopRightRadius: 15,
                                    borderTopLeftRadius: 15,
                                }} />
                            <View style={styles.itemDown} className='mx-2 pt-4 pb-2'>
                                <View>
                                    <Text className='text-gray-500 font-semibold'>
                                        {item.placeName}
                                    </Text>
                                    <Text className='text-blue-500 '>
                                        {item.TimeRec}
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => openGoogleMaps(item.onMap)}>
                                    <Image
                                        source={require('../../assets/Search.png')}
                                        style={{ height: 32, width: 32 }} />
                                </TouchableOpacity>
                            </View>
                            <View className='mx-2 mb-2'>
                                <Text className='text-red-500 font-semibold'>
                                    Recommendation
                                </Text>
                                <Text>
                                    {item.Rocomend}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            )}
            contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 16 }}
        />
    );
};

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
    itemDown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default OneTrip;
