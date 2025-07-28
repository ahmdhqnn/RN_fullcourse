import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerStyle: { backgroundColor: "#f5f5f5" }, headerShadowVisible: false, tabBarStyle: { backgroundColor: "#f5f5f5", 
      borderTopColor: "#f5f5f5", borderTopWidth: 0, elevation: 0, shadowOpacity: 0,
     },
     tabBarActiveTintColor: "#6200ee",
     tabBarInactiveTintColor: "#666666",

     }}>
      <Tabs.Screen name="index" options={{
        title: "Today's Habbits", headerTitleAlign: "center", tabBarIcon: ({ color, size }) => 
          <MaterialCommunityIcons name="calendar-today" size={size} color={color} />
          // return focused ? (
          //   <Ionicons name="home" size={24} color={color} />
          // ) : (
          //   <Ionicons name="home-outline" size={24} color="black" />
          // )
        
      }} />
      <Tabs.Screen name="streaks" options={{
        title: "Streaks", headerTitleAlign: "center", tabBarIcon: ({ color, size }) => 
          <MaterialCommunityIcons name="chart-line" size={size} color={color} />
      }} />
      <Tabs.Screen name="add-habbit" options={{
        title: "Add Habbit", headerTitleAlign: "center", tabBarIcon: ({ color, size }) => 
          <MaterialCommunityIcons name="plus" size={size} color={color} />
      }} />
    </Tabs>
  )
}