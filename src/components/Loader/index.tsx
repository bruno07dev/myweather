import React from 'react';

import Loader from '../../assets/animations/loading.json';
import LottieView from 'lottie-react-native';
import { Container } from './styles';

const LoaderComponent = () => (
  <Container>
    <LottieView
      autoPlay
      loop
      renderMode='SOFTWARE'
      source={Loader}
      style={{ width: 150, height: 150 }}
    />
  </Container>
);

export default LoaderComponent;
