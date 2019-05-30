import { combineReducers } from 'redux';
import data from './eventsMock.json';

const EventReducer = (state, action) => {
    return data;
};

export default EventReducer;
