import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Dashboard = ({ navigation }) => {
  return (
    <View className='mt-10'>
        <View className='mx-6'>
            <View className='' style={styles.container}>
                <Text>Dashboard</Text>
                <Text>Dashboard</Text>
            </View>
            <Text>Dashboard</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row', // Arrange children in a row
      justifyContent: 'space-between', // Distribute space between children
  },
});

export default Dashboard