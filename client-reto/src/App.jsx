import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Home from "./screens/Home";
import ItemResults from "./screens/ItemResults";
import ItemDetail from "./screens/ItemDetail";

const App = () => (
  <>
    <Navbar />
    <MainContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={ItemResults} />
        <Route exact path="/items/:id" component={ItemDetail} />
      </Switch>
    </MainContainer>
  </>
);

export default App;
