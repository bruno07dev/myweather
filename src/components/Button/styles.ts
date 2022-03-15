import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  width: 80%;
  background-color: #ffca28;
  border-radius: 20px;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #3c408a;
  font-size: 18px;
`;
