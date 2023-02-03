import axios from 'axios';
import * as constants from '../constants';
import { NASA_PHOTO_API_KEY } from '../constants';

export function getSatelliteLocation(location) {
    return {
        type: constants.GET_SATELLITE_LOCATION,
        payload: location,
    };
}

export function getSatellitePeople(people) {
    return {
        type: constants.GET_SATELLITE_PEOPLE,
        payload: people,
    };
}

export function getNasaPhoto(photo) {
    return {
        type: constants.GET_NASA_PHOTO,
        payload: photo
    };
}

export const getSatellite = () => {
    return(dispatch) => {
        axios.get('http://api.open-notify.org/iss-now.json')
            .then(res => {
                const location = res.data;
                dispatch(getSatelliteLocation(location))
            })
            .catch(err => {
                console.log(err.message);
            })
    }
}

export const getAstros = () => {
    return(dispatch) => {
        axios.get('http://api.open-notify.org/astros.json')
            .then(res => {
                const people = res.data;
                dispatch(getSatellitePeople(people))
            })
            .catch(err => {
                console.log(err.message);
            })
    }
}

export const getPhoto = () => {
    return(dispatch) => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_PHOTO_API_KEY}`)
            .then(res => {
                const photo = res.data;
                dispatch(getNasaPhoto(photo))
            })
            .catch(err => {
                console.log(err.message);
            })
    }
}