/** @module currencyHistory/action */

import cHistoryService from './service'
import appConfig from '../app/config'
import {RECEIVE_PAGE_DATA} from './actionTypes'

const currencyHistoryService = new cHistoryService(appConfig.apiPrefix)

const fetchPageData = (data) => {    
    return { 
        type: RECEIVE_PAGE_DATA,
        history: data.history,
        periods: data.periods,
        currencies: data.currencies,
        currencyId: data.currencyId
    }
}

const fetchCurrencyHistory = (currencyId, period) => dispatch => {           
        return currencyHistoryService.fetchHistoryPage(currencyId, period).then( response => {
            dispatch(fetchPageData(response.data))
        }).catch(error => { 
            console.log(error)
        })
}

export {
    fetchCurrencyHistory
}