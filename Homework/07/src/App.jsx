import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import PageNotFound from "./pages/PageNotFound";
import Root from "./pages/Root";
import SolarSystem from "./pages/SolarSystem";
import WildlifeSpotlight from "./pages/WildlifeSpotlight";

import './App.css';

function App() {
    return (<>
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/"                     element={<Root />} />
                <Route path="/solar-system"         element={<SolarSystem />} />
                <Route path="/wildlife-spotlight"   element={<WildlifeSpotlight />} />
                <Route path="*"                     element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    </>);
}

export default App;
