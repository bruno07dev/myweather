import React, { ReactNode } from 'react';
import { theme } from '../../theme';

import { Column } from '../Column';

interface IWrapperComponentProps {
  bg?: string;
  children: ReactNode;
}

const Wrapper: React.FC<IWrapperComponentProps> = ({
  bg = theme.colors.white,
  children
}: IWrapperComponentProps) => {
  return (
    <Column m={25} backgroundColor={bg}>
      {children}
    </Column>
  );
};

export default Wrapper;
