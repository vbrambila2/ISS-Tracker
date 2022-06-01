import * as constants from '../constants';

const initialState = {
    location: undefined,
    people: [],
};

/* eslint-disable default-case, no-param-reassign */
const issReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_SATELLITE_LOCATION:
            return action.payload
        case constants.GET_SATELLITE_PEOPLE:
            return state.people
        default:
            return state
    }
};

export default issReducer;