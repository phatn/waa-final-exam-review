import { Link } from "react-router-dom";
import {useState} from "react";
import { ThemeColorContext } from "../ThemeColorContext";
import AppRouter from "../AppRouter";

export default function Dashboard() {

    const [themeColorState, setThemeColorState] = useState('Navy');

    return (

        <div>
            <div>Current Theme Color: {themeColorState}</div>
            <ThemeColorContext.Provider value={{themeColorState, setThemeColorState}}>
                <ul>
                    <li><Link to='/weathers'>Weathers</Link></li>
                    <li><Link to='/add-job'>Add Job</Link></li>
                </ul>
                <AppRouter />
            </ThemeColorContext.Provider>
        </div>
    )
}