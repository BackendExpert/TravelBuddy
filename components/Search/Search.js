import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const Search = ({ navigation }) => {

    const [SearchData, SetSearchData] = React.useState({
        dataSearch: ''
    })

    const handleChange = (name, value) => {
        SetSearchData({
          ...SearchData,
          [name]: value,
        });
    };

    const headleSubmit = () => {
        console.log('Form Data:', SearchData);
    }

  return (
    <View className='mt-10 mx-6'>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Image 
                    source={require('../../assets/Back.png')} 
                    style={{ height: 32, width: 32 }} 
                />
            </TouchableOpacity>         
            <Text className='pt-2 font-semibold text-blue-500 pl-5'>Search Your Destination</Text>         
        </View>

        <View>
            <TextInput
                placeholder='Search'
                className='h-12 bg-blue-800/10 px-4 rounded-full mt-4'
                value={SearchData.dataSearch}
                onChangeText={(value) => handleChange('dataSearch', value)}
            >
            </TextInput>

            <Text className='bg-blue-400 rounded-full py-4 text-center font-semibold text-white mt-4' onPress={headleSubmit}>
                Search
            </Text>
        </View>

        <View>
            <Text>

            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    }
    
});

export default Search