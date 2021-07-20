import './App.css';
import RootContainer from "./containers/RootContainer";
import { Switch, Route,BrowserRouter} from "react-router-dom";
import * as routes from "./lib/constants";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path={routes.ROOT_ROUTE} component={RootContainer} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;
