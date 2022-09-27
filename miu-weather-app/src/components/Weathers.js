import Weather from "./Weather";
import { useEffect, useState } from "react";
const axios = require('axios').default;

export default function Weathers() {

    const initialState = {
        weathers: [],
        loaded: false
    }

    const [weathersState, setWeathersState] = useState(initialState);

    useEffect( () => {
        const fetchData = async () => {
            setWeathersState({...weathersState, loaded: false});
            const response = await axios.get(`http://localhost:8080/api/weathers`);
            setWeathersState({...weathersState, weathers: response.data, loaded: true});
        }

        fetchData();

    }, [])

    return (
        <div>
            { !weathersState.loaded ? <div>Loading...</div> :
                weathersState.weathers.map(w => {
                    return (
                        <Weather key={w.id} data={w} />
                    )
                })
            }
        </div>
    )
}