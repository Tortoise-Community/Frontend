import {BrowserRouter, Switch, Route} from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/events" component={About}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={About}/>
          <Route path="/privacy" component={About}/>
          <Route path="/rules" component={About}/>
          <Route path="/resources" component={About}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
