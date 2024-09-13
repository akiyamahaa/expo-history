import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categoriesData } from '@/constants/data'

export default function Categories() {
  return (
    <View>
      <View className="mx-5 flex-row justify-between items-center py-5">
        <Text className="text-base font-bold text-gray-500">Category</Text>
        <TouchableOpacity>
          <Text className="text-base text-blue-500">View all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        className="px-4"
        contentContainerStyle={{ gap: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((category, index) => {
          return (
            <TouchableOpacity key={index} className="items-center">
              <Image source={category.image} className="w-20 h-20 rounded-2xl" />
              <Text className="text-xs font-bold py-1">{category.title}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}
