import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { images } from '@/constants'
import Categories from '@/components/Categories'
import SortCategories from '@/components/SortCategories'
import Destinations from '@/components/Destinations'
import { AntDesign } from '@expo/vector-icons'

const home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Avatar */}
        <View className="flex-row justify-between items-center mx-4 mb-4">
          <Text className="text-black font-bold text-2xl">Explore Places</Text>
          <TouchableOpacity>
            <Image source={images.avatar} className="w-12 h-12" />
          </TouchableOpacity>
        </View>

        {/* SearchBar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-[#F2F2F2] rounded-full p-4 pl-6 gap-[5px]">
            <AntDesign name="search1" size={20} color="gray" />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor={'gray'}
              className="flex-1 text-[16px] mb-1 pl-1 tracking-[0.5px]"
            />
          </View>
        </View>

        {/* Categories */}
        <View className="mb-5">
          <Categories />
        </View>

        {/* Sort Categories */}
        <View className="mb-5">
          <SortCategories />
        </View>

        {/* Destinations */}
        <View>
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default home
