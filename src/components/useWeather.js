import {useState, useEffect} from 'react'
import axios from 'axios'

const useWeathers = (city) => {
    const [weather, setWeather] = useState([]);

    const getWeather = async () => {
        return axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&units=metric&appid=ac6427222963e24140376f46e44d3bd7`
        );
    };

    useEffect(() => {
        getWeather().then((response) => {
            console.log('getWeather');
            console.log(response);
            setWeather(response.data.list);
        });
    }, []);

    return weather
}

export default useWeathers