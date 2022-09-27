const axios = require('axios').default;


// A mock function to mimic making an async request for data
export async function getWeathers() {

    const response = await axios.get(`http://localhost:8080/api/weathers`);
    return response.data;
}

export async function getWeatherById(id) {
    const response = await axios.get(`http://localhost:8080/api/weathers/${id}`);
    return response.data;
}


