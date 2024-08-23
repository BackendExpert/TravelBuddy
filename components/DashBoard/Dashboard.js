// Dashboard.js
import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Sidebar from './Sidebar'; // Import the Sidebar component

const Dashboard = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const [sidebarVisible, setSidebarVisible] = React.useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Matemasie': require('../../assets/Fonts/Matemasie-Regular.ttf'),
        'dancing': require('../../assets/Fonts/DancingScript-VariableFont_wght.ttf'),
      });
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    };

    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };


  const data = [
    { id: '1', itemStyle: { color: 'orange'}, title: 'Food', Icon: require('../../assets/Food.png')},
    { id: '2', itemStyle: { color: 'blue'}, title: 'Sleep', Icon: require('../../assets/Bed.png')},
    { id: '3', itemStyle: { color: 'red'}, title: 'Bus', Icon: require('../../assets/Bus.png')},
    { id: '4', itemStyle: { color: 'green'}, title: 'Train', Icon: require('../../assets/Train.png')},
    { id: '5', itemStyle: { color: 'orange'}, title: 'Hit', Icon: require('../../assets/Star.png')},
    { id: '6', itemStyle: { color: 'blue'}, title: 'Search', Icon: require('../../assets/Search.png')},

    // Add more items as needed
  ];
  
  const renderItem = ({ item }) => (


      <TouchableOpacity style={styles.item} className='bg-blue-800/5'>
        <View >
          <Image
            source={item.Icon}
            className='h-8 w-8'        
          >
          </Image>
          <Text style={item.itemStyle}>{item.title}</Text>
        </View>
      </TouchableOpacity>


  );
  return (
    <View style={styles.maincontainer} className='pt-10'>
      <Sidebar isVisible={sidebarVisible} onClose={toggleSidebar} />
      <View style={styles.header} className='mx-6'>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <Image 
            source={require('../../assets/Menu.png')} 
            style={{ height: 20, width: 20 }} 
            className='mt-2'
          />
        </TouchableOpacity>
        <Text 
          style={{ 
            fontFamily: 'dancing',
            fontWeight: '600',
            fontSize: 20,
            transform: [{ rotate: '-8deg' }],
            color: 'blue',
          }}>
          Travel Buddy
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image 
            source={require('../../assets/Home.png')} 
            style={{ height: 32, width: 32 }} 
          />
        </TouchableOpacity>
      </View>
      <View className='mt-6 mx-4'>
          {/* <View style={styles.form}>
              <TextInput
                placeholder='Search'
                className='bg-gray-300 rounded-full h-10 pl-4'
              >
              </TextInput>

              <Text className='bg-blue-500 rounded-full py-3 text-white font-semibold mt-4 text-center'>
                Search
              </Text>
          </View> */}
          <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={4} // Number of columns in the grid
            contentContainerStyle={styles.grid}           
          />
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    position: 'relative', // Ensures the sidebar is positioned relative to this container
    overflow: 'hidden', // Prevents overflow of content
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    height: '100%',
  },
  form: {
    justifyContent: 'space-between',
  },
  grid: {
    padding: 10,
  },
  item: {
    flex: 1,
    margin: 5,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
  
});

export default Dashboard;
