import './index.scss';

import React from 'react';
import SubTitle from '../common/SubTitle'
import TimeStampItem from './TimestampItem';
import myData from '../../db.json';
import useLanguage from '../../hooks/useLanguage';
import { LANGUAGE } from '../../constants/language';

const Timestamp = () => {
  const { timestamp } = myData;
  const { currentLanguage } = useLanguage();

  return (
    <>
      {timestamp &&
        <>
          <SubTitle>{currentLanguage === LANGUAGE.EN?"Timestamp":"Horodatage"}</SubTitle>
          <div className='timestamp-container'>
            {timestamp.map((time, index) => (
              <TimeStampItem key={index} {...time} />
            ))}
          </div>
        </>
      }
    </>
  );
};

export default Timestamp;
