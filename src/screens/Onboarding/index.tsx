import React, { useState, useEffect, Dispatch } from 'react';
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import clima from '../../assets/clima.jpg';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import { userLocationActions } from '../../redux/actions/userLocationActions';

import {
  Container,
  OnboardingImage,
  Content,
  AppNameText,
  PrimaryText,
  SecondaryText,
  ButtonContainer
} from './styles';


const Onboarding: React.FC = () => {
  const userLocationDispatch = useDispatch<Dispatch<userLocationActions>>();

  const [loading, setIsLoading] = useState(false);
  const [permissionEnabled, setPermissionsEnabled] = useState(false);
  const { navigate } = useNavigation();

  const verifyLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ]);

      if (
        granted['android.permission.ACCESS_COARSE_LOCATION'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        setPermissionsEnabled(true);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        setIsLoading(true);
        verifyLocationPermission();
        if (permissionEnabled) {
          Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              userLocationDispatch({
                type: 'FETCH_USER_LOCATION',
                payload: { lat: latitude, long: longitude }
              });
            },
            error => {
              // eslint-disable-next-line no-console
              console.error(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        }
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };
    getCoordinates();
  }, [permissionEnabled, userLocationDispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Container>
        <OnboardingImage source={clima} />

        <Content>
          <AppNameText>
            MyWeather{' '}
          </AppNameText>
        </Content>
        <PrimaryText>
          o seu app favorito
        </PrimaryText>
        <SecondaryText>
          de Clima
        </SecondaryText>
        <ButtonContainer>
          <Button text='Obter clima' onPress={() => navigate('Home')} />
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Onboarding;
