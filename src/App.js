import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { ShipmentDetailPage, ShipmentListingPage } from './pages';
import { GlobalStyle } from './styles';

function App() {
  return <BrowserRouter>
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" component={ShipmentListingPage} exact/>
        <Route path="/:shipmentId" component={ShipmentDetailPage}/>
        <Route component={Error}/>
      </Switch>
    </div> 
  </BrowserRouter>;
}

export default App;
