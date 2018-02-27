import React, { Component } from 'react'

class periodList extends Component {
    constructor(props) { 
        super(props)
    }
    
    selectValue = (e) => {
        this.props.fetchCurrencyHistory(this.props.currencyId, e.target.value )
    }
    
    render() {
        let periodOptions = this.props.periods.map( period =>  
                <option value={period} key={period}> 
                    {period}
                </option>
        )

        return (         
            <label> Period
                <select onChange={this.selectValue} >                
                   {periodOptions}
                </select> 
            </label>
        )
    }
}

export default periodList