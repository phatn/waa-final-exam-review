import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {default as axios} from "axios";

export default function WeatherDetail() {

    const params = useParams();

    const initialState = {
        weather: null,
        loaded: false
    }

    const [weatherState, setWeatherState] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            setWeatherState({...weatherState, loaded: false});
            const response = await axios.get(`http://localhost:8080/api/weathers/${params.id}`);
            setWeatherState({...weatherState, weather: response.data, loaded: true});
        }

        fetchData();
    }, [])


    const [themeColor, setThemeColor] = useState('Navy');

    const onChangeClicked = () => {
        console.log(`Current Theme Color: ${themeColor}`);
    }

    const onThemeColorChanged = (e) => {
        setThemeColor(e.target.value);
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
                        Theme Color: <input type='text' name='theme-color' value={themeColor} onChange={onThemeColorChanged}/>
                        <button onClick={onChangeClicked}>Change</button>
                    </p>
                </div>
            }
        </div>
    )
}