import './App.css';
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import AppRouter from "./AppRouter";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Dashboard />
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
