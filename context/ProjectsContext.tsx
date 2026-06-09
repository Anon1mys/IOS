import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultProjects, Project } from '../data/projects';
import { loadData, saveData } from '../utils/storage';

const STORAGE_KEY = '@projects';

interface ProjectsContextType {
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => Promise<void>;
  removeProject: (id: string) => Promise<void>;
  isLoading: boolean;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [isLoading, setIsLoading] = useState(true);

  // Wczytaj projekty z AsyncStorage lub użyj domyślnych
  useEffect(() => {
    async function loadProjects() {
      const saved = await loadData<Project[]>(STORAGE_KEY);
      if (saved && saved.length > 0) {
        setProjects(saved);
      } else {
        await saveData(STORAGE_KEY, defaultProjects);
      }
      setIsLoading(false);
    }
    loadProjects();
  }, []);

  async function addProject(project: Omit<Project, 'id'>) {
    const newProject: Project = {
      ...project,
      id: Date.now().toString(),
    };
    const updated = [...projects, newProject];
    setProjects(updated);
    await saveData(STORAGE_KEY, updated);
  }

  async function removeProject(id: string) {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    await saveData(STORAGE_KEY, updated);
  }

  return (
    <ProjectsContext.Provider value={{ projects, addProject, removeProject, isLoading }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects musi być użyty wewnątrz ProjectsProvider');
  }
  return context;
}
