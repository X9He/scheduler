import { combineReducers } from 'redux';
import EventsReducer from './EventsReducer'
import SessionReducer from './SessionReducer'


export default combineReducers({
    // assigned EventsReducer to key of "events"
    events: EventsReducer,
    session: SessionReducer
});


