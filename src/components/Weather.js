import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Form, Input, Label } from 'semantic-ui-react'

const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [typedWord, setTypedWord] = useState('Hong Kong')

    const getWeather = async (keyword) => {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${keyword}&cnt=7&units=metric&appid=ac6427222963e24140376f46e44d3bd7`);
        console.log(response)
        if (response.status === 200) {
            setWeather(response.data.list)
        }
    };

    useEffect(() => {
        getWeather(typedWord)
    }, []);

    const getWeatherViews = () => {
        console.log('getWeatherViews')
        console.log(weather)
        return weather.map( (w) => {
            return(
                <div key={w.dt}>
                    <h1>hello world</h1>
                    <h2>{w.dt_txt}</h2>
                    <h2>{w.main?.feels_like}</h2>
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
