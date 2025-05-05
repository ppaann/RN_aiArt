import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThemeColor } from '@/utils/styleVariables';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ThemeColor.primary,
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        },
        headerTintColor: ThemeColor.primary,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#white',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='collection'
        options={{
          title: 'Collection',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'star' : 'star-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='custom'
        options={{
          title: 'Custom',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'color-palette' : 'color-palette-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
