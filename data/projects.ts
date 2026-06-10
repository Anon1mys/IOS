export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  year: number;
}

export const defaultProjects: Project[] = [
  {
    id: '1',
    name: 'Aplikacja Helpdesk',
    description:
      'System zgłoszeń serwisowych dla działu IT. Użytkownicy mogą zgłaszać problemy, a technicy przypisywać i rozwiązywać zgłoszenia.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    year: 2024,
  },
  {
    id: '2',
    name: 'Portfolio',
    description:
      'Aplikacja mobilna z profilem, umiejętnościami i listą projektów. Zbudowana w React Native z Expo Router.',
    technologies: ['React Native', 'Expo', 'TypeScript'],
    year: 2025,
  },
  {
    id: '3',
    name: 'System CRUD w Yii2',
    description:
      'Aplikacja webowa do zarządzania danymi (Create, Read, Update, Delete) zbudowana w frameworku Yii2.',
    technologies: ['PHP', 'Yii2', 'MySQL', 'HTML', 'CSS'],
    year: 2023,
  },
  {
    id: '4',
    name: 'Aplikacja Android z bazą danych',
    description:
      'Mobilna aplikacja na Androida z lokalną bazą SQLite do przechowywania notatek i zadań studenta.',
    technologies: ['Java', 'Android', 'SQLite'],
    year: 2023,
  },
];
