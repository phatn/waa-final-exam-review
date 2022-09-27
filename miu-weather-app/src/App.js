import './App.css';
import Dashboard from "./components/Dashboard";
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";

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
