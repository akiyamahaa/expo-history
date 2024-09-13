import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { AntDesign } from '@expo/vector-icons'
import { destinationData } from '@/constants/data'
import { router } from 'expo-router'

export default function Destinations() {
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinationData.map((item, index) => {
        return <DestinationCard item={item} key={index} index={index} />
      })}
    </View>
  )
}

export const DestinationCard = ({ index, item }: any) => {
  const [isFavourite, toggleFavourite] = useState(false)

  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: '/screen/destination',
          params: {
            index,
          },
        })
      }}
      style={styles.DestinationCard}
    >
      <Image source={item.image} style={styles.avatar} />

      <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={styles.heartIcon}>
        <AntDesign name="heart" size={20} color={isFavourite ? 'red' : 'white'} />
      </TouchableOpacity>

      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  DestinationCard: {
    justifyContent: 'flex-end',
    position: 'relative',
    padding: 16,
    paddingVertical: 24,
    gap: 5,
    marginBottom: 20,
    width: wp(44),
    height: wp(65),
  },
  avatar: {
    position: 'absolute',
    width: wp(44),
    height: wp(65),
    borderRadius: 35,
  },
  heartIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    borderRadius: 50,
    padding: 12,
    backgroundColor: 'black',
  },
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'white',
  },
})
