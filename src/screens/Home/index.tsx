import React, { useState, useEffect } from 'react';
import { ImageBackground } from "react-native";
import { useSelector } from 'react-redux';

import Weather from '../../components/Weather';
import Loader from '../../components/Loader';
import WeatherHourly from '../../components/WeatherHourly';
import WeatherDetails from '../../components/WeatherDetails';
import { Row } from '../../components/Row';
import { Column } from '../../components/Column';
import Button from '../../components/Button';

import {
  Container,
  WelcomeText,
  ButtonContainer
} from './styles';

import { WeatherProps, HourlyProps } from '../../constants';
import { AppState } from '../../redux/reducers/rootReducer';
import { getWeather, getWeatherHourly } from '../../services/weather';

const Home: React.FC = () => {
  const { userLocation } = useSelector((state: AppState) => state.userLocation);

  const [loading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState<WeatherProps>();
  const [hourlyWeather, sethourlyWeather] = useState<HourlyProps>();

  useEffect(() => {
    const loadWeather = async () => {
      const current = await getWeather(userLocation.lat, userLocation.long);
      const hourly = await getWeatherHourly(userLocation.lat, userLocation.long);

      Promise.all([current, hourly])
        .then(weather => {
          setCurrentWeather(weather[0].data);
          sethourlyWeather(weather[1].data.hourly);
          setIsLoading(false);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    };

    loadWeather();
  }, [userLocation.lat, userLocation.long]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Column>
        <WelcomeText>
          MyWeather
        </WelcomeText>
      </Column>

      <Weather data={currentWeather} />
      <Row>
        <WeatherHourly data={hourlyWeather} />
      </Row>
      <WeatherDetails data={currentWeather} />

      <ButtonContainer>
          <Button text='Atualizar' />
        </ButtonContainer>
    </Container>
  );
};

export default Home;

