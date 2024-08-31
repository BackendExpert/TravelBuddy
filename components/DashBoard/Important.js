import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'

const Important = ({ navigation }) => {
  return (
    <View className='mt-8 mx-4' style={styles.contianer}>
        <View style={styles.header} className='bg-gray-400/20 mt-2 py-3 rounded-full'>
          <Text className='text-red-500 font-semibold text-xl'>
              Important Notice
          </Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Image 
                source={require('../../assets/Home.png')} 
                style={{ height: 32, width: 32 }} 
            />
          </TouchableOpacity>
        </View>

        <ScrollView className='mt-8 mb-8'>
            <Text className='text-red-500 font-semibold'>
                This is the Very Important Notice before you Travel in Sri Lanka. 
            </Text>
            <Text className='my-2 text-red-500 font-semibold'>
                Read this Important Notice Carefully 
            </Text>

            <Text className='text-blue-500 font-semibold'>
                These situations were faced by many foreigners as well as locals, and some of them were experienced by me and my friends.
            </Text>

            <Text className='font-semibold mt-4'>Following are the Most Important situations that you have to face</Text>

            <View className='mt-4 mx-4'>
              <Text className='text-red-500 font-semibold'>1. At the Airport </Text>
              <Text>Most of foreigners have to face this problem</Text>

              <Text className='text-red-500 font-semibold mt-4'>2. Scamming </Text>
              <Text>Most of foreigners have to face this problem</Text>

              <Text className='text-red-500 font-semibold mt-4'>3. When You Traveling </Text>
              <Text>Please use </Text>

              <Text className='text-red-500 font-semibold mt-4'>4. Getting help by Someone </Text>
              <Text> * When You getting help by Someone please be Careful. (not for all Most of Sri Lankans are very helpfull)</Text>
              <View className='mx-2 mt-4'>
                  <Text className='text-blue-500'>Example:</Text>
                  <Text className='mt-2'>
                    when you are traveling you have to use map in your Mobile. If someone come to you and he will ask you "You need any help" or something like that, he will come to your place and <Text className='text-red-500 font-semibold'>act very helpfully and kindnesslly</Text>
                  </Text>
                  <Text className='mt-2'>
                    Then he ask to get your mobile to show the location, <Text className='text-red-500 font-semibold'>Do Give him your mobile</Text>
                  </Text>
                  <Text className='mt-2'>
                    If you give the mobile to him and he will run away with your mobile <Text>(This is the one of incident that my local friend had to face in Colombo)</Text>
                  </Text>
              </View>


            </View>
        </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1
  },
  header:{
    alignItems: 'center'
  }
})

export default Important