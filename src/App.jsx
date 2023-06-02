import { Helmet } from 'react-helmet';
import Home from './components/pages/Home';
import { LanguageContextProvider } from './context/languageContext';
import React from 'react';
import { ThemeChangeContextProvider } from './context/themeChangeContext';
import myData from './db.json';

function App() {
  const {
    meta: { title },
  } = myData;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <script>if (location.hostname.split('.')[0] === "cv") location.href = "https://www.berchil.in/assets/documents/Berchil_Idriss_CV-FR.pdf";</script>
      </Helmet>
      <ThemeChangeContextProvider>
        <LanguageContextProvider>
          <Home />
        </LanguageContextProvider>
      </ThemeChangeContextProvider>
    </>
  );
}

export default App;
