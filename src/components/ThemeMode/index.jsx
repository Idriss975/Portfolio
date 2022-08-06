import './index.scss';

import React from 'react';
import useLanguage from '../../hooks/useLanguage';
import useTheme from '../../hooks/useTheme';
import { LANGUAGE } from '../../constants/language';
import myData from '../../db.json';
import i18n from '../../lang/i18n';
import gtag from 'ga-gtag';

const  ThemeMode = () => {
  const { toggleDarkTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();
  const {
    meta: {CV}
  } = myData;

  return (
    <div className='container'>
      <div className='language'>
        <select defaultValue={currentLanguage} onChange={function() {
          changeLanguage(); 
          gtag("event", "LanguageChange_"+i18n.language);
        }}>
          <option value='English'>English</option>
          <option value='Français'>Français</option>
        </select>
        <a href={CV} onClick={()=>gtag("event","Resume_click")}>{currentLanguage === LANGUAGE.EN?"Resume":"CV"}</a>
      </div>
      <div className='theme-container'>
        <button onClick={function() {
           toggleDarkTheme();
           gtag("event",document.body.dataset.theme==="dark-mode"?"Themechange_DarkMode":"Themechange_LightMode");
        }}></button>
      </div>
    </div>
  );
};

export default ThemeMode;
