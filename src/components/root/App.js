import React from 'react';
import { Container } from 'reactstrap';
import Dashboard from './Dashboard';
import Navi from '../navi/Navi'; 
import { Switch, Route } from 'react-router-dom';
import CartDetail from '../cart/CartDetail';

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/product' component={Dashboard} />
          <Route path='/cart' component={CartDetail} /> 
        </Switch>
      </Container>
    </div>
  );
}

export default App;
