import React from 'react';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import {
  ItemDetailText,
  ItemTemeratureText,
  ItemDescriptionText
 } from './styles';

 import { Column } from '../../components/Column';

import { formatTime, formatTemperature } from '../../utils';

interface IHourlyProps {
  dt: number;
  temp: number;
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
}

interface IWeatherHourlyProps {
  data: IHourlyProps[];
}

const WeatherHourly: React.FC<IWeatherHourlyProps> = ({ data }) => {
  return (
    <>
      <HourlyList
        data={data}
        keyExtractor={index => index.toString()}
        renderItem={({ item }) => (
          <Column
            key={item.dt}
            p={15}
            mt={20}
            mr={15}
            borderColor='#666bd0'
            backgroundColor='#e5e9f2'
            borderWidth={2}
            alignItems='center'
            justifyContent='space-between'
            width={120}
            height={130}
            borderRadius={30}
          >
            <ItemDetailText>{formatTime(item.dt)}</ItemDetailText>

            <ItemTemeratureText>
              {formatTemperature(item.temp)}
            </ItemTemeratureText>
            <ItemDescriptionText>{item.weather[0].description}</ItemDescriptionText>
          </Column>
        )}
      />
    </>
  );
};

const HourlyList = styled(FlatList as new () => FlatList<IWeatherItem>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})``;


export default WeatherHourly;
