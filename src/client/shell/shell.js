/** @module shell/shell */

import AppFooter from './appFooter'
import AppHeader from './appHeader'
import React, { Component } from 'react'
import CurrencyHistory from '../currencyHistory/CurrencyHistory'

/** This shell component is supposed to be used with a route engine,
* However, due to the initial purpose of this project, which is to show some of my fullstack skills, 
* I'm not implementing a rounting bind for now. 
* If I had implemented routing, the content component would have been something like this: 
* <div className="app-content">{this.props.children}</div>
*/ 

export default class Shell extends Component { 
    constructor(props) {
        super(props)
    }

    render() {
        return( 
                <div className="container">            
                    <AppHeader />
                       <CurrencyHistory />
                    <AppFooter />
                </div>
        )
    }
}