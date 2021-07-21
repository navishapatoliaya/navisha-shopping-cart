import './App.css';
import RootContainer from "./containers/RootContainer";
import { Switch, Route} from "react-router-dom";
import * as routes from "./lib/constants";
import React from "react";

const App = () => {
  return (
   
    <Switch>
      <Route path={routes.ROOT_ROUTE} component={RootContainer} />
    </Switch>

  );
};

export default App;
