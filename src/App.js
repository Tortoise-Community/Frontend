import WebRoutes from "./routes/WebRoutes";
import PasteRoutes from "./routes/PasteRoutes";

function App() {
    if (window.location.host.split(".")[0] === "paste"){
        return <PasteRoutes/>
    }
    else{
        return <WebRoutes/>
    }
}

export default App;
