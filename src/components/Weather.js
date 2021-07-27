import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Weather = () => {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        (async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=hongkong&appid=26153c0a7dd7f8c70cc47753ff149b1f`)
            console.log(response)
            setWeather(response.data)
        })()
    })

    return (
        <div>
            <h1>Weather</h1>
            <p>
                
            </p>
        </div>
    )
}

export default Weather;
