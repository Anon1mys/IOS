import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useProjects } from '../../context/ProjectsContext';
import { colors, spacing } from '../../constants/theme';

interface FormErrors {
  name?: string;
  description?: string;
  technologies?: string;
  year?: string;
}

export default function AddProjectScreen() {
  const { addProject } = useProjects();
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [technologiesText, setTechnologiesText] = useState('');
  const [year, setYear] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (name.trim().length < 3) {
      newErrors.name = 'Nazwa musi mieć co najmniej 3 znaki';
    }
    if (description.trim().length < 10) {
      newErrors.description = 'Opis musi mieć co najmniej 10 znaków';
    }

    const technologies = technologiesText
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    if (technologies.length === 0) {
      newErrors.technologies = 'Podaj co najmniej jedną technologię';
    }

    const yearNum = parseInt(year, 10);
    if (isNaN(yearNum) || yearNum < 2000 || yearNum > 2030) {
      newErrors.year = 'Rok musi być między 2000 a 2030';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) {
      return;
    }

    const technologies = technologiesText
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    await addProject({
      name: name.trim(),
      description: description.trim(),
      technologies,
      year: parseInt(year, 10),
    });

    router.back();
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.label}>Nazwa projektu</Text>
      <TextInput
        style={[styles.input, errors.name && styles.inputError]}
        value={name}
        onChangeText={setName}
        placeholder="Wpisz nazwę projektu"
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <Text style={styles.label}>Opis</Text>
      <TextInput
        style={[styles.input, styles.inputMultiline, errors.description && styles.inputError]}
        value={description}
        onChangeText={setDescription}
        placeholder="Opisz swój projekt"
        multiline
      />
      {errors.description && <Text style={styles.error}>{errors.description}</Text>}

      <Text style={styles.label}>Technologie (oddzielone przecinkami)</Text>
      <TextInput
        style={[styles.input, errors.technologies && styles.inputError]}
        value={technologiesText}
        onChangeText={setTechnologiesText}
        placeholder="np. React Native, TypeScript"
      />
      {errors.technologies && <Text style={styles.error}>{errors.technologies}</Text>}

      <Text style={styles.label}>Rok</Text>
      <TextInput
        style={[styles.input, errors.year && styles.inputError]}
        value={year}
        onChangeText={setYear}
        placeholder="np. 2025"
        keyboardType="numeric"
      />
      {errors.year && <Text style={styles.error}>{errors.year}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Dodaj projekt</Text>
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
  label: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
    marginTop: spacing.sm,
  },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: colors.text,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: colors.error,
  },
  error: {
    color: colors.error,
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
