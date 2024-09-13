import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { sortCategoryData } from '@/constants/data'

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState('Popular')

  return (
    <View style={styles.container}>
      {sortCategoryData.map((sort, index) => {
        const isActive = sort == activeSort
        const activeButtonClass = isActive ? styles.active : {}

        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            style={[styles.activeOnPress, activeButtonClass]}
          >
            <Text
              style={{
                fontSize: wp(4),
                color: isActive ? 'blue' : 'rgba(0,0,0,0.5)',
              }}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
    padding: 8,
  },
  active: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  activeOnPress: {
    padding: 12,
    borderRadius: 50,
  },
})
