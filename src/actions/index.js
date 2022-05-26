import * as constants from './constants';

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