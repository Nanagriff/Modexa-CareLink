"use client";

import { useState, createContext, useContext, ReactNode } from 'react';

interface AppState {
  currentForumId: string | null;
  setCurrentForumId: (forumId: string | null) => void;
}

interface AppStateProviderProps {
  children: ReactNode;
}

const AppStateContext = createContext<AppState | undefined>(undefined);

export const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [currentForumId, setCurrentForumId] = useState<string | null>(null);

  return (
    <AppStateContext.Provider value={{ currentForumId, setCurrentForumId }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
