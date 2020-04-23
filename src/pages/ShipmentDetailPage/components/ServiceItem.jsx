import React from 'react';

import { StyledTable } from '../../../components';

export default function ServiceItem({ type, value }) {
  return <StyledTable>
    {type && <tr>
      <td>Type</td>
      <td>{type}</td>
    </tr>}
    {value && <tr>
      <td>Value</td>
      <td>{value}</td>
    </tr>}
  </StyledTable>;
}
