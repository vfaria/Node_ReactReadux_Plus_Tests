/** @module app/index */

import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store';
import reducers from './reducers'

import Shell from '../shell/shell'
import config from './config'

let store = createStore()

render( <Provider store={store} >
    <Shell /> 
    </Provider>,  document.getElementById('root')            
)

 