import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import Dashboard from './components/DashBoard/Dashboard';
import Search from './components/Search/Search';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false}}/>
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false}}/>        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

