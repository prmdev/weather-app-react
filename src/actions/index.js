import axios from 'axios';
import keys from '../keys/keys';


const ROOT_URL = keys.ROOT_URL; 

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city){
const url = `${ROOT_URL}&q=${city},us`
const request = axios.get(url);



    return{
        type: FETCH_WEATHER,
        payload: request
    };
}