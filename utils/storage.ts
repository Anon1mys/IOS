import AsyncStorage from '@react-native-async-storage/async-storage';

// Zapisuje obiekt jako JSON pod podanym kluczem
export async function saveData<T>(key: string, value: T): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

// Wczytuje dane z AsyncStorage lub zwraca null
export async function loadData<T>(key: string): Promise<T | null> {
  const raw = await AsyncStorage.getItem(key);
  if (!raw) {
    return null;
  }
  return JSON.parse(raw) as T;
}
