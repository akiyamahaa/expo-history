import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { destinationData } from '@/constants/data'

export default function DestinationScreen(props: any) {
  const params = useLocalSearchParams()
  const item = destinationData[Number(params.index)]
  const [isFavourite, toggleFavourite] = useState(false)

  return (
    <View className="flex-1 bg-white">
      <Image source={item.image} className="w-full h-[55%]" resizeMode="cover" />
      <StatusBar style="light" />

      <SafeAreaView className="flex-row justify-between items-center w-full absolute top-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-black/50 p-2 rounded-full ml-4"
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Favourite View */}
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          className="bg-black/50 p-2 rounded-full mr-4"
        >
          <View>
            <AntDesign name="heart" size={24} color={isFavourite ? 'red' : 'white'} />
          </View>
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView
        className="rounded-t-[50px] px-5 flex-1 bg-white pt-8 -mt-14"
        contentContainerStyle={{
          gap: 20,
        }}
      >
        <View className="flex-row justify-between items-start">
          <Text className="text-2xl font-bold text-black">{item?.title}</Text>
        </View>

        <Text className="text-base tracking-wider mb-2">{item?.longDescription}</Text>

        <View className="flex-row justify-between mx-1">
          {/* Duration View */}
          <View className="justify-center items-center">
            <AntDesign name="clockcircle" size={24} color="orange" />
            <View className="items-center gap-1 pt-1">
              <Text className="text-xl font-bold">{item.duration}</Text>
              <Text className="tracking-wider text-[#A0A0A0]">Duration</Text>
            </View>
          </View>

          {/* Distance View */}
          <View className="justify-center items-center">
            <AntDesign name="clockcircle" size={24} color="orange" />
            <View className="items-center gap-1 pt-1">
              <Text className="text-xl font-bold">{item.distance}</Text>
              <Text className="tracking-wider text-[#A0A0A0]">Distance</Text>
            </View>
          </View>

          {/* Weather View */}
          <View className="justify-center items-center">
            <AntDesign name="clockcircle" size={24} color="orange" />
            <View className="items-center gap-1 pt-1">
              <Text className="text-xl font-bold">{item.weather}</Text>
              <Text className="tracking-wider text-[#A0A0A0]">Weather</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
