import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Important = ({ navigation }) => {
  return (
    <View className='mt-8 mx-4'>
        <View style={styles.header} className='bg-gray-400/20 mt-2 py-3 rounded-full'>
          <Text className='text-red-500 font-semibold text-xl'>
              Important Notice
          </Text>
        </View>

        <View className='my-4'>
            <Text className='text-red-500 font-semibold'>
                This is the Very Important Notice before you Travel in Sri Lanka. 
            </Text>
            <Text className='my-2 text-red-500 font-semibold'>
                Read this Important Notice Carefully 
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    alignItems: 'center'
  }
})

export default Important