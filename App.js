import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='bg-blue-500 text-4xl'>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

