import axios from 'axios';
const URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeather = async (query) => {
    const {
        data
    } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            appid: API_KEY,

        }
    })

    return data
}