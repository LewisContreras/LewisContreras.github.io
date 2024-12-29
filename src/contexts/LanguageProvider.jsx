import React, { createContext, useState } from 'react';
import en from '../translations/en.json';
import es from '../translations/es.json';

const LanguageContext = createContext();

const translations = {
    es,
    en,
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ t, toggleLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
