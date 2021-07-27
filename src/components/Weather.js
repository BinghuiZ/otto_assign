import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Form, Input } from 'semantic-ui-react'

const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState('Hong Kong')

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

    return (
        <div>
            <h1>Weather</h1>
            <Form>
                <Form.Field>
                    <Input icon='search' placeholder='seach weather by city' onChange={(e, d) => {
                        setCity(d.value)
                    }} />
                </Form.Field>
            </Form>
            <div>
                {weather.map(w => {
                    return <div key={w.dt}><p>{w.toString()}</p></div>
                })}
            </div>
        </div>
    )
}

export default Weather;
