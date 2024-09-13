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
      <Stack.Screen name="sign-in" options={{}} />
      <Stack.Screen name="sign-up" options={{}} />
    </Stack>
  )
}

export default AuthLayout
