/** @module app/reducers */

import {combineReducers} from 'redux'
import currentHistory from '../currencyHistory/reducer'

const reducers = combineReducers({
    currentHistory
})
 
export default reducers