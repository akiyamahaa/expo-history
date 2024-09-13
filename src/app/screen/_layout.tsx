import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="home" options={{}} />
      <Stack.Screen name="destination" options={{}} />
      <Stack.Screen name="splash-screen" options={{}} />
    </Stack>
  )
}

export default AuthLayout
