import { getWeatherAPI } from '../constants';
import axios from 'axios';


const formatResponse = (data) => {
    return data.daily.time.map((item, index) => {
        return {
            date: item,
            apparent_temperature_max: data?.daily?.apparent_temperature_max[index],
            apparent_temperature_mean: data?.daily?.apparent_temperature_mean[index],
            temperature_2m_max: data?.daily?.temperature_2m_max[index],
            temperature_2m_min: data?.daily?.temperature_2m_min[index],
            temperature_2m_mean: data?.daily?.temperature_2m_mean[index]
        }
    })
}

const getWeatherDetails = async (lat=12.9716, lon=77.5946, start='2024-12-01', end='2024-12-07') => {
    const url = getWeatherAPI(lat, lon, start, end);
    const response = await axios.get(url);
    return formatResponse(response?.data);
}

export default getWeatherDetails;