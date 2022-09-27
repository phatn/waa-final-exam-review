import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddJob from "./components/AddJob";
import Weathers from "./components/Weathers";
import WeatherDetail from "./components/WeatherDetail";

export default function AppRouter() {

    return (
        <Routes>
            <Route path="/weathers" element={<Weathers />} />
            <Route path="/weather/:id" element={<WeatherDetail />} />
            <Route path="/add-job" element={<AddJob />} />
        </Routes>
    )
}