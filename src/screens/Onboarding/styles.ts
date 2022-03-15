import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #4a5e74;
  align-content: center;
`;

export const OnboardingImage = styled.Image`
  width: 100%;
  height: 500px;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const AppNameText = styled.Text`
  margin-left: 16px;
  font-size: 36;
  font-weight: bold;
  color: #fff;
  text-align: left;
`;

export const PrimaryText = styled.Text`
  margin-left: 16px;
  font-size: 24;
  font-weight: bold;
  color: #ffca28;
`;

export const SecondaryText = styled.Text`
  margin-left: 16px;
  font-size: 24;
  font-weight: bold;
  color: #fff;
  margin-bottom: 24px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
`;
