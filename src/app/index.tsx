import { Redirect } from 'expo-router'
import { View } from 'react-native'
export default function App() {
  return (
    <>
      <View className="flex-1">
        <Redirect href="/screen/home" />
      </View>
    </>
  )
}
