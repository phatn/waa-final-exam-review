import { Route, Routes } from "react-router-dom";
import AddJob from "./components/AddJob";
import Weathers from "./components/Weathers";
import WeatherDetail from "./components/WeatherDetail";
import JobDetail from "./components/JobDetail";

export default function AppRouter() {

    return (
        <Routes>
            <Route path="/weathers" element={<Weathers />} />
            <Route path="/weather/:id" element={<WeatherDetail />} />
            <Route path="/job/:id" element={<JobDetail />} />
            <Route path="/add-job" element={<AddJob />} />
        </Routes>
    )
}