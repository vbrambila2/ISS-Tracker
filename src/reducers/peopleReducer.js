import * as constants from '../constants';

const initialState = {
    people: [],
};

/* eslint-disable default-case, no-param-reassign */
const peopleReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_SATELLITE_PEOPLE:
            return action.payload
        default:
            return state
    }
};

export default peopleReducer;