import * as constants from '../constants';

const initialState = {
    location: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const issReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_SATELLITE_LOCATION:
            return action.payload;
        default:
            return state;
    }
}

export default issReducer;