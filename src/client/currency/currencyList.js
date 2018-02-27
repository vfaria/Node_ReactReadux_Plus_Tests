import React, { Component } from 'react'

class currencyList extends Component { 
    constructor(props) { 
        super(props)
    }

    selectCurrency = e => { 
        this.props.fetchCurrencyHistory(e.target.value, this.props.period)
    }

    render() { 
        let currencies = this.props.currencies.map(currency => 
            <option value={currency.currencyId} key={currency.currencyId}>{currency.name}</option>
        )

        return ( 
            <label> Currency
                <select onChange={this.selectCurrency}> 
                    {currencies}
                </select> 
            </label>
        )    
    }    
}

export default currencyList