import Index from "./pages/Index";
import {BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
