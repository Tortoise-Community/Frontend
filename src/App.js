import {BrowserRouter, Switch, Route} from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import EventPage from "./pages/EventPage";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/events" component={Events}/>
          <Route path="/events/:slug" component={EventPage}/>
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
