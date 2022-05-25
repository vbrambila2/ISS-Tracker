import * as constants from './constants';

export const initialState = {
  location: undefined,
  people: [],
};

/* eslint-disable default-case, no-param-reassign */
const issReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_SATELLITE_LOCATION:

        case constants.GET_SATELLITE_PEOPLE:

        default:
            return state
    
    }
};

export default issReducer;