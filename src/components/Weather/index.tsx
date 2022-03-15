import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  TemperatureText,
  WeatherDescription,
  Text,
  DataText,
  MinimumTemperature,
  MaximumTemperature,
  WindSpeed,
  WeatherClouds
} from './styles';

import { Row } from '../Row';
import { Column } from '../Column';

import { formatDate, formatTemperature } from '../../utils';

interface IWeatherProps {
  info: {
    dt: number;
    name: string;
    main: {
      temp: number;
    };
    weather: [
      {
        description: string;
      }
    ];
  };
}

const Weather: React.FC<IWeatherProps> = ({ data }) => {
  const { dt, name, main, weather, wind, rain, clouds } = data;

  return (
    <>
      <Column alignItems='flex-end'>
        <Row
          mt={-80}
          p={15}
          backgroundColor='#478db8'
          opacity={0.8}
          justifyContent='center'
          alignContent='center'
          alignItems='center'
          borderRadius={100}
          borderWidth={2}
          borderColor='#8592a7'
          width='40%'
          height={120}
        >
          <Column>
            <Text>
              {name}
            </Text>
            <DataText>
              {formatDate(dt)}
            </DataText>
          </Column>
        </Row>
      </Column>
      <Column mt={30}>
        <Row
          mt={0}
          p={15}
          backgroundColor='#8592a7'
          justifyContent='space-between'
          alignItems='center'
          borderRadius={20}
          width='100%'
          height={120}
        >
          <Column>
            <TemperatureText>
              {formatTemperature(main.temp)}
            </TemperatureText>
            <WeatherDescription>
              {weather[0].description}
            </WeatherDescription>
          </Column>
          <Column>
            <WindSpeed>
              Vento &nbsp;
              {wind.speed}
              &nbsp; km/h
            </WindSpeed>
            <WeatherClouds>
              Nuvens &nbsp;
              {clouds.all}
              %
            </WeatherClouds>
            <MinimumTemperature>
              Min &nbsp;
              {formatTemperature(main.temp_min)}
            </MinimumTemperature>
            <MaximumTemperature>
              Máx &nbsp;
              {formatTemperature(main.temp_max)}
            </MaximumTemperature>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default Weather;
