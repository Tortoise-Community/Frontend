import {BrowserRouter, Route, Switch} from "react-router-dom";

import Index from "../pastebin/pages/Index";

export default function PasteRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
            </Switch>
        </BrowserRouter>
    )
}