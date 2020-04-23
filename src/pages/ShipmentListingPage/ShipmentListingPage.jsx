import React, { useEffect, useMemo, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { get } from '../../api/shipments.api';
import { ShipmentTable } from './components';

const PageWrapper = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;
`;


export default function ShipmentListingPage() {
  const [queryOptions, setQueryOptions] = useState({
    sortBy: 'id',
    sortDescending: false,
    filterText: '',
    pageSize: 20,
    page: 1,
  });
  const [selectedShipmentId, setSelectedShipmentId] = useState('');
  const [shipmentList, setShipmentList] = useState([]);

  useEffect(() => {
    get(queryOptions).then(shipmentList => setShipmentList(shipmentList));
  }, [queryOptions]);

  if (selectedShipmentId != '') {
    return <Redirect to={`/${selectedShipmentId}`} />;
  }

  return <PageWrapper>
    <ShipmentTable
      data={shipmentList}
      onClickRow={(id) => setSelectedShipmentId(id)}
      queryOptions={queryOptions}
      setQueryOptions={setQueryOptions}
    />
  </PageWrapper>;
}
