export const getWeatherAPI = (lat=12.9716, lon=77.5946, start='2024-12-01', end='2024-12-07') => {
    return `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${start}&end_date=${end}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean&timezone=auto`
}
