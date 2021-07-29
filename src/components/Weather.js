import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Form, Input, Card, Divider, Image } from 'semantic-ui-react'
import { convertDateTime, getDayOfWeek } from '../utils/utils'

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
            } else {
                setCurrent({})
                setDaily([])
            }
        } else {
            setCurrent({})
            setDaily([])
        }
    };

    useEffect(() => {
        getWeather(typedWord)
    }, []);

    const getWeatherViews = () => {
        console.log('getWeatherViews')
        console.log(daily)
        if (daily.length > 0) {
            return daily.map( (w) => {
                return(
                    <Card key={w.dt}>
                        <Card.Content>
                            <Image 
                                floated='right'
                                size='mini'
                                src={`http://openweathermap.org/img/wn/${w.weather[0]?.icon}@2x.png`} 
                            />
                            <Card.Header>{convertDateTime(w.dt)}</Card.Header>
                            <Card.Meta>{getDayOfWeek(w.dt)}</Card.Meta>
                            <Card.Description>
                                <p>Temp: {w.temp.min} | {w.temp.max} &#8451;</p>
                                <p>Humidity: {w.humidity}%</p>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Description>
                                <p>{w.weather[0]?.main}</p>
                                <p>{w.weather[0]?.description}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                )
            })
        } else {
            return <div>No Match city</div>
        }
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
            <Divider />
            <h2>Daily Weather of {typedWord}</h2>
            <Card.Group>
                { getWeatherViews() }
            </Card.Group>
        </div>
    )
}

export default Weather;
