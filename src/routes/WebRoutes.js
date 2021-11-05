import {BrowserRouter, Route, Switch} from "react-router-dom";

import Index from "../web/pages/Index";
import About from "../web/pages/About";
import Events from "../web/pages/Events";
import EventPage from "../web/pages/EventPage";
import Contact from "../web/pages/Contact";
import Privacy from "../web/pages/Privacy";
import Rules from "../web/pages/Rules";

export default function WebRoutes() {
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
    )
}