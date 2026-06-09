import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../constants/theme';

const EMAIL = 'maksym.leskiv@student.pl';
const GITHUB_URL = 'https://github.com/maksymleskiv';
const LINKEDIN_URL = 'https://www.linkedin.com/in/maksymleskiv';

export default function ContactScreen() {
  function openEmail() {
    Linking.openURL(`mailto:${EMAIL}`);
  }

  function openGitHub() {
    Linking.openURL(GITHUB_URL);
  }

  function openLinkedIn() {
    Linking.openURL(LINKEDIN_URL);
  }

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Kontakt</Text>
        <Text style={styles.subtitle}>Masz pytanie? Napisz do mnie</Text>

        <View style={styles.card}>
          <ContactRow icon="mail-outline" label="E-mail" value={EMAIL} />
          <ContactRow icon="logo-github" label="GitHub" value="github.com/maksymleskiv" />
          <ContactRow icon="logo-linkedin" label="LinkedIn" value="linkedin.com/in/maksymleskiv" />
          <ContactRow icon="location-outline" label="Lokalizacja" value="Katowice, Polska" />
        </View>

        <TouchableOpacity style={styles.button} onPress={openEmail}>
          <Ionicons name="mail" size={20} color="#fff" />
          <Text style={styles.buttonText}>Wyślij e-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={openGitHub}>
          <Ionicons name="logo-github" size={20} color={colors.accent} />
          <Text style={styles.buttonOutlineText}>Otwórz GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={openLinkedIn}>
          <Ionicons name="logo-linkedin" size={20} color={colors.accent} />
          <Text style={styles.buttonOutlineText}>Otwórz LinkedIn</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.row}>
      <Ionicons name={icon} size={22} color={colors.accent} />
      <View style={styles.rowText}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    gap: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rowText: {
    flex: 1,
  },
  rowLabel: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  rowValue: {
    fontSize: 15,
    color: colors.text,
    fontWeight: '500',
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: spacing.sm,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonOutline: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  buttonOutlineText: {
    color: colors.accent,
    fontSize: 16,
    fontWeight: '600',
  },
});
