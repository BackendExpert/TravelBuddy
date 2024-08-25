import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import Dashboard from './components/DashBoard/Dashboard';
import Trips from './components/Trips/Trips';
import Important from './components/DashBoard/Important';
import AllTrips from './components/Trips/AllTrips';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false}}/>  
        <Stack.Screen name="Trips" component={Trips} options={{ headerShown: false}}/>  
        <Stack.Screen name="AllTrips" component={AllTrips} options={{ headerShown: false}}/>  
        <Stack.Screen name="Important" component={Important} options={{ headerShown: false}}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

