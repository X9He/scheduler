import data from './eventsMock.json';

const EventReducer = (state, action) => {
    if (state == null) {
        return data
    }
    switch (action.type) {
        case 'ADD_EVENT':
            return state.concat(action.event);
        case 'ADD_EVENTS':
            return state;
        default:
            return state
    }
};

export default EventReducer;
