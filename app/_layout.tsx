import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { ProfileProvider } from '../context/ProfileContext';
import { ProjectsProvider } from '../context/ProjectsContext';
import { colors } from '../constants/theme';

export default function RootLayout() {
  return (
    <ProfileProvider>
      <ProjectsProvider>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.textSecondary,
            headerStyle: { backgroundColor: colors.card },
            headerTintColor: colors.accent,
            tabBarStyle: { backgroundColor: colors.card },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Profil',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="projects"
            options={{
              title: 'Projekty',
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="folder-outline" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="contact"
            options={{
              title: 'Kontakt',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="mail-outline" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </ProjectsProvider>
    </ProfileProvider>
  );
}
