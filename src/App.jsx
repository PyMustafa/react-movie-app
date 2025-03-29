import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes/RoutesList";
function App() {
    return (
        <>
            <BrowserRouter>
                <RoutesList />
            </BrowserRouter>
        </>
    );
}
export default App;
