import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer'


export default combineReducers({
    // assigned EventsReducer to key of "events"
    events: EventsReducer
});


