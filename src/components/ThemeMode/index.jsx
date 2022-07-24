import './index.scss';

import React from 'react';
import useLanguage from '../../hooks/useLanguage';
import useTheme from '../../hooks/useTheme';
import { LANGUAGE } from '../../constants/language';

const  ThemeMode = () => {
  const { toggleDarkTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <div className='container'>
      <div className='language'>
        <select defaultValue={currentLanguage} onChange={changeLanguage}>
          <option value='English'>English</option>
          <option value='Français'>Français</option>
        </select>
        <a href=".">{currentLanguage === LANGUAGE.EN?"Resume":"CV"}</a>
      </div>
      <div className='theme-container'>
        <button onClick={toggleDarkTheme}></button>
      </div>
    </div>
  );
};

export default ThemeMode;
