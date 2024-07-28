// src/context/UserContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';

interface UserContextType {
  role: 'doctor' | 'nurse' | 'admin' | null;
  setRole: (role: 'doctor' | 'nurse' | 'admin') => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = React.useState<'doctor' | 'nurse' | 'admin' | null>(null);

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};
