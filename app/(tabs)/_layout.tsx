import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const TabsLayout = () => {

  const { colors } = useTheme();

  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopWidth: 1,
            borderTopColor: colors.border,
            height: 90,
            paddingBottom: 30,
            paddingTop: 10,
        },
        tabBarLabelStyle: {
            fontSize: 18,
            fontWeight: "600",
        },
        headerShown: false,
    }}>
        <Tabs.Screen name='index' options={{ title: "Todos", tabBarIcon: ({color, size}) => ( <Ionicons name='flash-outline' size={size} color={color} /> ) }} />
        <Tabs.Screen name='settings' options={{ title: "Settings", tabBarIcon: ({color, size}) => ( <Ionicons name='settings' size={size} color={color} /> ) }} />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})