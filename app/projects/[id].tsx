import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useProjects } from '../../context/ProjectsContext';
import { colors, spacing } from '../../constants/theme';

export default function ProjectDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { projects, removeProject } = useProjects();
  const router = useRouter();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Nie znaleziono projektu</Text>
      </View>
    );
  }

  function handleDelete() {
    Alert.alert(
      'Usuń projekt',
      `Czy na pewno chcesz usunąć projekt „${project!.name}"?`,
      [
        { text: 'Anuluj', style: 'cancel' },
        {
          text: 'Usuń',
          style: 'destructive',
          onPress: async () => {
            await removeProject(project!.id);
            router.back();
          },
        },
      ]
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.name}>{project.name}</Text>
        <Text style={styles.year}>Rok realizacji: {project.year}</Text>

        <Text style={styles.sectionTitle}>Opis</Text>
        <Text style={styles.description}>{project.description}</Text>

        <Text style={styles.sectionTitle}>Technologie</Text>
        <View style={styles.techRow}>
          {project.technologies.map((tech) => (
            <View key={tech} style={styles.techBadge}>
              <Text style={styles.techText}>{tech}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Usuń projekt</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.md,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  notFound: {
    fontSize: 18,
    color: colors.textSecondary,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  year: {
    fontSize: 15,
    color: colors.accent,
    fontWeight: '600',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: spacing.sm,
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techBadge: {
    backgroundColor: colors.accentLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  techText: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '500',
  },
  deleteButton: {
    backgroundColor: colors.error,
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
