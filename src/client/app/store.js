/** @module app/store */

import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleware = [ thunk ]

const create = ()  =>  {
    const appliedMiddleware = applyMiddleware(...middleware)
    return createStore(reducers, appliedMiddleware)
}

export default create