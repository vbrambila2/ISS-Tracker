import axios from 'axios';
import * as constants from '../constants';

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

export const getSatellite = () => {
    return(dispatch) => {
        axios.get('http://api.open-notify.org/iss-now.json')
            .then(res => {
                const location = res.data;
                dispatch(getSatelliteLocation(location))
            })
            .catch(err => {
                const errMsg = err.message;
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
                const errMsg = err.message;
            })
    }
}