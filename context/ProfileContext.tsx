import React, { createContext, useContext, useEffect, useState } from 'react';
import { loadData, saveData } from '../utils/storage';

const STORAGE_KEY = '@profile';

export interface Profile {
  name: string;
  bio: string;
  skills: string[];
}

const defaultProfile: Profile = {
  name: 'Maksym Leskiv',
  bio: 'Student informatyki, interesuję się programowaniem mobilnym i aplikacjami webowymi. Chętnie uczę się nowych technologii.',
  skills: ['React Native', 'Expo', 'TypeScript', 'JavaScript', 'PHP', 'MySQL', 'Git'],
};

interface ProfileContextType {
  profile: Profile;
  updateProfile: (data: Profile) => Promise<void>;
  isLoading: boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [isLoading, setIsLoading] = useState(true);

  // Wczytaj profil z pamięci przy starcie aplikacji
  useEffect(() => {
    async function loadProfile() {
      const saved = await loadData<Profile>(STORAGE_KEY);
      if (saved) {
        setProfile(saved);
      }
      setIsLoading(false);
    }
    loadProfile();
  }, []);

  async function updateProfile(data: Profile) {
    setProfile(data);
    await saveData(STORAGE_KEY, data);
  }

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile musi być użyty wewnątrz ProfileProvider');
  }
  return context;
}
