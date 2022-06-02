import * as constants from '../constants';

const initialState = {
    photo: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const photoReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_NASA_PHOTO:
            return action.payload
        default:
            return state
    }
};

export default photoReducer;