import React from 'react';

import { Column } from '../Column';
import { IColumnProps } from '../Column';

export type RowProps = IColumnProps;

const Row: React.FC<RowProps> = props => <Column flexDirection='row' {...props} />;

export default Row;
