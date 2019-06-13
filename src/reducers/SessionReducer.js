
const SessionReducer = (state, action) => {
    if (state == null) {
        return { cur_date : new Date()};
    }
    switch (action.type) {
        case 'INIT_CUR_SES_DATE':
            state.cur_date = new Date();
            break;
        case 'GET_CUR_SES_DATE':
            return state.cur_date;
        case 'SET_CUR_SES_DATE':
            return {
                ...state,
                cur_date: action.date
            };
        default:
            return state
    }
};

export default SessionReducer;
