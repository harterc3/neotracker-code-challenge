import React from 'react';
import styled from 'styled-components';

import { Color } from '../../styles';

const HeaderText = styled.h2`
  margin: 0;
  color: white;
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
`;

const HeaderTextWrapper = styled.div`
  width: 786px;
`;

const HeaderDiv = styled.div`
  background-color: ${Color.PRIMARY};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  position: fixed;
  width: 100%;
`;

export default function Header() {
  return <HeaderDiv>
    <HeaderTextWrapper>
      <HeaderText>Shipments.com</HeaderText>
    </HeaderTextWrapper>
  </HeaderDiv>;
}
