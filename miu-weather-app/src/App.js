import './App.css';
import Dashboard from "./components/Dashboard";
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";
import { ThemeColorContext } from "./ThemeColorContext";
import {useState} from "react";

function App() {
    const [themeColorState, setThemeColorState] = useState('Nav');

      return (
        <div className="App">
            <div>Current Theme Color: {themeColorState}</div>
            <BrowserRouter>
                <ThemeColorContext.Provider value={{themeColorState, setThemeColorState}}>
                    <Dashboard />
                    <AppRouter />
                </ThemeColorContext.Provider>
            </BrowserRouter>
        </div>
      );
}

export default App;
