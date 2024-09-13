import { images } from '@/constants'
import { ERouteTable } from '@/constants/route-table'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
export default function App() {
  return (
    <>
      <View className="flex-1 justify-end">
        {/* Background Image */}
        <View className="flex-1 absolute justify-end">
          <Image source={images.westLake} className="w-screen h-screen self-center" />
        </View>

        {/* Contents */}
        <View className="p-5 pb-10 gap-8">
          <LinearGradient
            colors={['transparent', 'rgba(3,105,161,0.8)']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
          <View className="gap-2.5">
            <Text className="text-white font-bold text text-4xl">Discover History Treasures</Text>
            <Text className="text-white font-bold text-lg">
              Explore the Rich Tapestry of History with Us!
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push(ERouteTable.HOME)}
            className="rounded-full bg-white px-12 py-3 self-center"
          >
            <Text className="text-blue-400 font-bold text-xl">Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}
