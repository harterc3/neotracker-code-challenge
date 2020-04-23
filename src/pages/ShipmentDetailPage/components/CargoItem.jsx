import React from 'react';

import { StyledTable } from '../../../components';

export default function CargoItem({ description, type, volume }) {
  return <StyledTable>
    <tr>
      <td>Description</td>
      <td>{description}</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>{type}</td>
    </tr>
    <tr>
      <td>Volume</td>
      <td>{volume}</td>
    </tr>
  </StyledTable>;
}
