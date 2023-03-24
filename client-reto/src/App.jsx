import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import Home from './screens/Home';


const App = () => (
  <>
    <Navbar />
    <MainContainer>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </MainContainer>
  </>
);

export default App;