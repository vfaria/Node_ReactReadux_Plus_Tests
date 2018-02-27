/** @module currencyHistory/historyList */

import React, { Component }  from 'react'
import PropTypes from 'prop-types'

class historyList extends Component {
    constructor(props) { 
        super(props)
    }
    
    selectValue = (e) => {
        this.props.fetchCurrencyHistory(this.props.currencyId, e.target.value )
    }
    
    render() {
        
        return (         
            <div>
               { this.props.history.map( item =>  
                <div className="row" key={item.id}>
                     <label>Id
                        <div className="col-mg">{item.id}</div>
                    </label>
                    <label>Open
                        <div className="col-mg">{item.open}</div>
                    </label>
                    <label>Low
                        <div className="col-mg">{item.low}</div>
                    </label>
                    
                </div>
               )}                
            </div>
        )}
    }
    
    export default historyList