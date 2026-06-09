import { Stack } from 'expo-router';
import { colors } from '../../constants/theme';

export default function ProjectsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.accent,
        headerTitleStyle: { fontWeight: '600' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Projekty' }} />
      <Stack.Screen name="[id]" options={{ title: 'Szczegóły projektu' }} />
      <Stack.Screen name="new" options={{ title: 'Dodaj projekt' }} />
    </Stack>
  );
}
