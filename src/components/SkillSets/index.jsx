import './index.scss';

import React from 'react';
import SubTitle from '../common/SubTitle';
import myData from '../../db.json';
import { useTranslation } from 'react-i18next';
import useLanguage from '../../hooks/useLanguage';
import { LANGUAGE } from '../../constants/language';

const SkillSets = () => {
  const { skillSets } = myData;
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  return (
    <>
      {skillSets && (
        <>
          <SubTitle>{currentLanguage === LANGUAGE.EN?"Skill Sets":"Compétences"}</SubTitle>
          <div className='skill-sets-container'>
            {skillSets.map((set, index) => (
              <div className='skill-set' key={index}>
                <div className='category'>{currentLanguage === LANGUAGE.EN?set.category[0]:set.category[1]}</div>
                <div className='items'>
                  {set.skills
                    .sort((a, b) => b.level - a.level)
                    .map(({ skill, level }, index) => (
                      <div className='item' key={index}>
                        <span className='skill'>{skill}</span>
                        {level && <span className={`level ${level > 3 && 'expert'}`}>{level}</span>}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default SkillSets;
