import {BrowserRouter, Switch, Route} from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/events" component={Index}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Index}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
