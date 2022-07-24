import './index.scss';

import ProjectItem from './ProjectItem';
import React from 'react';
import SubTitle from '../common/SubTitle';
import myData from '../../db.json';
import useLanguage from '../../hooks/useLanguage';
import { LANGUAGE } from '../../constants/language';

const Project = () => {
  const { projects } = myData;
  const { currentLanguage } = useLanguage();

  return (
    <>
      {projects && (
        <>
          <SubTitle>{currentLanguage === LANGUAGE.EN?"Projects":"Projets"}</SubTitle>
          <div className='projects-container'>
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Project;
