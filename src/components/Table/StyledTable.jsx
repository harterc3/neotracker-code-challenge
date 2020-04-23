import styled from 'styled-components';

import { Color } from '../../styles';

export default styled.table`
  border-spacing: 0;
  border: 1px solid black;
  margin-bottom: 10px;

  th {
    cursor: default;
    background-color: ${Color.PRIMARY_LIGHT}
  }

  tr {
    cursor: ${props => props.clickable ? 'pointer' : 'default'};
    :hover {
      background-color: ${props => props.clickable ? Color.PRIMARY_LIGHT : 'default'};
    }
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;

    :last-child {
      border-right: 0;
    }
  }
`;