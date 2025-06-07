
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type TranslationDirection = 'normal-to-genz' | 'genz-to-normal';
export type Language = 'en' | 'bn' | 'hi' | 'es';

interface TranslationSettings {
  language: Language;
  showEmojis: boolean;
  showTooltips: boolean;
  enableVoice: boolean;
}

interface TranslationHistory {
  id: string;
  input: string;
  output: string;
  direction: TranslationDirection;
  timestamp: Date;
}

interface TranslationContextType {
  settings: TranslationSettings;
  updateSettings: (newSettings: Partial<TranslationSettings>) => void;
  history: TranslationHistory[];
  addToHistory: (item: Omit<TranslationHistory, 'id' | 'timestamp'>) => void;
  clearHistory: () => void;
}

const defaultSettings: TranslationSettings = {
  language: 'en',
  showEmojis: true,
  showTooltips: true,
  enableVoice: true,
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<TranslationSettings>(defaultSettings);
  const [history, setHistory] = useState<TranslationHistory[]>([]);

  const updateSettings = (newSettings: Partial<TranslationSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const addToHistory = (item: Omit<TranslationHistory, 'id' | 'timestamp'>) => {
    const newItem: TranslationHistory = {
      ...item,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
    };
    setHistory(prev => [newItem, ...prev].slice(0, 50)); // Keep only last 50 items
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <TranslationContext.Provider
      value={{
        settings,
        updateSettings,
        history,
        addToHistory,
        clearHistory,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
