/** @module currencyHistory/currencyHistoryComponent */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import HistoryList from './historyList'
import PeriodList from '../period/periodList'
import CurrencyList from '../currency/currencyList' 

import {fetchCurrencyHistory } from './action'

export class CurrencyHistory extends Component {
    constructor(props) {
        super(props)
    }
    
    static propTypes = {
        history: PropTypes.array.isRequired, 
        periods: PropTypes.array.isRequired,
        currencies: PropTypes.array.isRequired      
    }
    
    componentDidMount() {
        // As recommended, data is loaded after the component is mounted.
        // Avoiding issues on setting up the initial state or server rendering.
        
        this.props.fetchCurrencyHistory();
    }
    
    render() {
        
        return (
            <div>     
                <div className="row">
                    <div className="col-mg">
                        <PeriodList {... this.props} />
                    </div>
                    <div className="col-mg">
                        <CurrencyList {... this.props} />
                    </div>                 
                </div>       
                <HistoryList history={this.props.history} />
            </div> 
        )
    }
}

export default connect(
    (state, ownProps) => ({
        history: state.currentHistory.history,
        periods: state.currentHistory.periods,
        currencies: state.currentHistory.currencies,
        currencyId: state.currentHistory.currencyId,
        period: state.currentHistory.period
    }),
    { fetchCurrencyHistory }
)(CurrencyHistory)