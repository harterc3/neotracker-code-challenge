import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getDetail, put } from '../../api/shipments.api';
import { StyledTable } from '../../components';
import { CargoItem, ServiceItem } from './components';

const PageWrapper = styled.div`
  padding-top: 60px;
  width: 786px;
  margin: auto;
`;

const ContentWrapper = styled.div`
`;

const UpdateNameWrapper = styled.div`
  margin-bottom: 1em;
`;


export default function ShipmentDetailPage() {
  const [shipment, setShipment] = useState(null);
  const [nameInputText, setNameInputText] = useState('');
  let { shipmentId } = useParams();

  useEffect(() => {
    getDetail(shipmentId).then(s => setShipment(s));
  }, [shipmentId]);

  const sendUpdateName = useCallback(async () => {
    if (nameInputText == '') return;
    const updated = await put(shipmentId, { ...shipment, name: nameInputText });
    setShipment(updated);
  });

  return shipment ? <PageWrapper>
    <div><Link to="/">Back</Link></div>
    <ContentWrapper>
      <h2>{shipment.name} ({shipment.id})</h2>
      <UpdateNameWrapper>
        <h4>Update Shipment Name</h4>
        <input type="text" placeholder={shipment.name} onChange={event => setNameInputText(event.target.value)}/>
        <button type="submit" onClick={sendUpdateName}>Save</button>
      </UpdateNameWrapper>
      <h4>Shipment Info</h4>
      <StyledTable>
        <tr>
          <td>Mode</td>
          <td>{shipment.mode}</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>{shipment.type}</td>
        </tr>
        <tr>
          <td>Destination</td>
          <td>{shipment.destination}</td>
        </tr>
        <tr>
          <td>Origin</td>
          <td>{shipment.origin}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{shipment.total}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{shipment.status}</td>
        </tr>
        <tr>
          <td>User ID</td>
          <td>{shipment.userId}</td>
        </tr>
      </StyledTable>
      <h4>Cargo</h4>
      {shipment.cargo.map(item => <CargoItem {...item} />)}
      <h4>Services</h4>
      {shipment.services.map(item => <ServiceItem {...item} />)}
    </ContentWrapper>
  </PageWrapper> : <span>loading..</span>;
}
