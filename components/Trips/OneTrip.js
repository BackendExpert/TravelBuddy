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

                    <View>
                        <View>
                            <Text className='text-blue-500 font-semibold my-4'>How to Come to {LocationOne.name}</Text>

                            {LocationOne.Travel.map((travel) => (
                            <View key={travel.TravelID} style={styles.card}>
                                <Text className='text-lg font-semibold text-gray-700'>
                                    From {travel.TravelFrom}:
                                </Text>
                                {travel.byBus ? (
                                    <Text className='text-sm text-gray-500 my-2'>
                                        <Text className='text-blue-500 font-semibold'>By Bus:</Text> {travel.byBus}
                                    </Text>
                                ) : null}
                                {travel.TimePrice ? (
                                    <View>
                                        <Text className='text-blue-500 font-semibold'>Time and Tickent Price:</Text>
                                        <TouchableOpacity onPress={() => Linking.openURL(travel.TimePrice).catch(err => console.error('An error occurred', err))}>
                                            <Text className='bg-blue-500 text-white my-1 py-1 text-center rounded-full font-semibold'>Bus Timetable</Text>
                                        </TouchableOpacity>
                                    </View>

                                ) : null}
                                {travel.byTrain ? (
                                    <Text className='text-sm text-gray-500 my-2'>
                                       <Text className='text-blue-500 font-semibold'>By Train:</Text> {travel.byTrain}
                                    </Text>
                                ) : null}
                                {travel.TrainTime ? (
                                    <View>
                                        <Text className='text-blue-500 font-semibold'>Train Time and Tickets:</Text>
                                        <TouchableOpacity onPress={() => Linking.openURL(travel.TrainTime).catch(err => console.error('An error occurred', err))}>
                                            <Text className='bg-blue-500 text-white my-1 py-1 text-center rounded-full font-semibold'>Train Timetable and Tickets</Text>
                                        </TouchableOpacity>
                                    </View>
                                ) : null}
                                {travel.googleLocation ? (
                                    <View>
                                            <Text className='text-blue-500 font-semibold'>Travel Distance :</Text>
                                            <TouchableOpacity className='' onPress={() => openGoogleMaps(travel.googleLocation)}>
                                                <Image 
                                                    source={require('../../assets/Search.png')}
                                                    style={{ height: 32, width: 32 }} 
                                                />
                                            </TouchableOpacity>
                                    </View>
                                ) : null}
                            </View>
                        ))}
                        </View>
                    </View>
                </View>
            )}
            renderItem={({ item }) => (
                <View>
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
    },
    card: {
        backgroundColor: '#fff', 
        borderRadius: 10, 
        padding: 15, 
        marginBottom: 10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 8, 
        elevation: 4, 
    },
});

export default OneTrip;
