import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Text } from './styles';
import { Row } from '../Row';

interface IButtonComponentProps {
  text: string;
  icon?: string;
  onPress?: () => void;
}

const Button: React.FC<IButtonComponentProps> = ({
  text,
  icon,
  onPress
}: IButtonComponentProps) => (
  <Container onPress={onPress}>
    <Row>
      <Text mr={icon && 10}>
        {text}
      </Text>
      {icon && <Icon name={icon} size={15} color='#3c408a' />}
    </Row>
  </Container>
);

export default Button;
