import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#007AFF" }}>
      <Tabs.Screen name="index" options={{
        title: "Home", headerTitleAlign: "center", tabBarIcon: ({ color, focused }) => {
          return focused ? (
            <Ionicons name="home" size={24} color={color} />
          ) : (
            <Ionicons name="home-outline" size={24} color="black" />
          )
        }
      }} />
      <Tabs.Screen name="exampleScreen" options={{
        title: "Example", headerTitleAlign: "center", tabBarIcon: ({ color, focused }) => {
          return focused ? (
            <Ionicons name="settings" size={24} color="black" />
          ) : (
            <Ionicons name="settings-outline" size={24} color="black" />
          )
        }
      }} />
    </Tabs>
  )
}