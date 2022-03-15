import React from 'react';

import {
  Container,
  SunriseDescription,
  SunriseTime,
  SunsetDescription,
  SunsetTime,
  ThermalDescription,
  ThermalTime,
  UmidityDescription,
  UmidityTime
} from './styles';

import { Row } from '../Row';
import { Column } from '../Column';


import { formatTime, formatTemperature, formatHumidity } from '../../utils';

interface IWeatherDetailsProps {
  details: {
    main: {
      feels_like: number;
      humidity: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
    };
  };
}

const WeatherDetails: React.FC<IWeatherDetailsProps> = ({ data }) => {
  const { feels_like, humidity } = data.main;
  const { sunrise, sunset } = data.sys;

  return (
    <>
      <Column
        mt={20}
        mb={20}
        py={20}
        px={15}
        backgroundColor='#478db8'
        width='100%'
        height={160}
        borderRadius={20}
      >
        <Row justifyContent='space-between'>
          <Column>
            <SunriseDescription>
              NASCER DO SOL
            </SunriseDescription>
            <SunriseTime>{formatTime(sunrise)}</SunriseTime>
          </Column>
          <Column>
            <SunsetDescription>
              PÔR DO SOL
            </SunsetDescription>
            <SunsetTime>{formatTime(sunset)}</SunsetTime>
          </Column>
        </Row>
        <Row mt={30} alignContent={'center'}>
          <Column>
            <ThermalDescription>
              SENSAÇÃO TÉRMICA
            </ThermalDescription>
            <ThermalTime>{formatTemperature(feels_like)}</ThermalTime>
          </Column>
          <Column ml={40}>
            <UmidityDescription>
              UMIDADE
            </UmidityDescription>
            <UmidityTime>{formatHumidity(humidity)}</UmidityTime>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default WeatherDetails;
