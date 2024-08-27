import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const OneTrip = ({ navigation, route }) => {
    const [LocationOne, SetLocationOne] = useState([])

    const { screenID } = route.params;

    useEffect(() => {
        const data = require('../../assets/API/AllData.json');
        
        // Find the location with id = 5
        const specificLocation = data.find(place => place.id === screenID);
        
        // Set the found location to the state
        SetLocationOne(specificLocation);
    }, [])

  return (
    <View className='mt-10 mx-6'>
        <View style={styles.header} className='rounded-full'>
            <TouchableOpacity onPress={() => navigation.navigate('AllTrips')}>
                <Image 
                    source={require('../../assets/Back.png')} 
                    style={{ height: 32, width: 32 }} 
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>
                {LocationOne.name}
            </Text>
        </View> 
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

});

export default OneTrip