import {BrowserRouter, Switch, Route} from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import EventPage from "./pages/EventPage";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Rules from "./pages/Rules";
import './style-override.css'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/events" component={Events}/>
          <Route path="/events/:slug" component={EventPage}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/privacy-policy" component={Privacy}/>
          <Route path="/rules" component={Rules}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
