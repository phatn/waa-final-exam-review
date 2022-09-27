import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { default as axios } from "axios";
import {ThemeColorContext} from "../ThemeColorContext";

export default function WeatherDetail() {

    const params = useParams();

    // State from Context
    const {themeColorState, setThemeColorState} = useContext(ThemeColorContext);

    const initialState = {
        weather: null,
        loaded: false
    }

    const [weatherState, setWeatherState] = useState(initialState);

    // Local state to track theme changed
    const [themeState, setThemeState] = useState(themeColorState);

    useEffect(() => {
        const fetchData = async () => {
            setWeatherState({...weatherState, loaded: false});
            const response = await axios.get(`http://localhost:8080/api/weathers/${params.id}`);
            setWeatherState({...weatherState, weather: response.data, loaded: true});
        }

        fetchData();
    }, [])

    const onChangeClicked = () => {
        setThemeColorState(themeState);
    }

    const onThemeColorChanged = (e) => {
        setThemeState(e.target.value);
    }

    return (
        <div>
            {!weatherState.loaded ? <div>Loading...</div> :
                <div>
                    <p>Id: {weatherState.weather.id}</p>
                    <p>City: {weatherState.weather.city}</p>
                    <p>Temperature: {weatherState.weather.temperature}</p>
                    <p>Humidity: {weatherState.weather.humidity}</p>
                    <p>wind: {weatherState.weather.wind}</p>
                    <p>
                        Theme Color: <input type='text' name='theme-color' value={themeState} onChange={onThemeColorChanged}/>
                        <button onClick={onChangeClicked}>Change</button>
                    </p>
                </div>
            }
        </div>
    )
}