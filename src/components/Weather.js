import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Form, Input, Label } from 'semantic-ui-react'

const Weather = () => {
    const [current, setCurrent] = useState({})
    const [daily, setDaily] = useState([]);
    const [typedWord, setTypedWord] = useState('Hong Kong')

    const getWeather = async (keyword) => {
        let lcoationResult = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${keyword}&units=metric&cnt=1&appid=ac6427222963e24140376f46e44d3bd7`);
        console.log(`lcoationResult`)
        console.log(lcoationResult)
        if (lcoationResult.status === 200) {
            let weatherResult = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lcoationResult.data.city.coord.lat}&lon=${lcoationResult.data.city.coord.lon}&units=metric&exclude=minutely,hourly&appid=ac6427222963e24140376f46e44d3bd7`)
            console.log(`weatherResult`)
            console.log(weatherResult)
            if (weatherResult.status === 200) {
                setCurrent(weatherResult.data.current)
                setDaily(weatherResult.data.daily)
            }
        }
    };

    useEffect(() => {
        getWeather(typedWord)
    }, []);

    const getWeatherViews = () => {
        console.log('getWeatherViews')
        console.log(daily)
        return daily.map( (w) => {
            return(
                <div key={w.dt}>
                    <h2>{w.weather[0]?.main}</h2>
                    <h2>{w.temp?.day}</h2>
                    <h2>{w.feels_like?.day}</h2>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Weather</h1>
            <Form onSubmit={ () => { getWeather(typedWord) } }>
                <Form.Field>
                    <Input icon='search' placeholder='seach weather by city' onChange={(e, d) => {
                        setTypedWord(d.value)
                    }}  />   
                </Form.Field>
            </Form>
            <div>
                { getWeatherViews() }
            </div>
        </div>
    )
}

export default Weather;
