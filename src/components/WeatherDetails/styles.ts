import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const SunriseDescription = styled.Text`
  font-weight: ${Platform.OS === 'ios' ? 600 : 700};
  color: #ffca28;
`;

export const SunriseTime = styled.Text`
  color: #fff;
`;

export const SunsetDescription = styled.Text`
  font-weight: ${Platform.OS === 'ios' ? 600 : 700};
  color: #ffca28;
`;

export const SunsetTime = styled.Text`
  color: #fff;
`;

export const ThermalDescription = styled.Text`
  font-weight: ${Platform.OS === 'ios' ? 600 : 700};
  color: #ffca28;
`;

export const ThermalTime = styled.Text`
  color: #fff;
`;


export const UmidityDescription = styled.Text`
   font-weight: ${Platform.OS === 'ios' ? 600 : 700};
   color: #ffca28;
`;

export const UmidityTime = styled.Text`
   color: #fff;
`;
