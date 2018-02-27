/** @module currencyHistory/reducer */

import {RECEIVE_PAGE_DATA} from './actionTypes'

const currencyHistoryReducer = (state = { history : [], periods: [] , currencies: [], currencyId: '', period: ''  } , action ) =>  {
    switch(action.type) { 
        case RECEIVE_PAGE_DATA: 
        return { 
            ...state,
            history: action.history,
            periods: action.periods, 
            currencies: action.currencies,
            currencyId: action.currencyId,
            period: action.period
        }
        default:    
        return state
    }
}

export default currencyHistoryReducer
