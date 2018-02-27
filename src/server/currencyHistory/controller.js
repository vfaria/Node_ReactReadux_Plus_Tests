/** @module currencyHistory/controller */

const axios = require('axios')
const util = require('util')

class currencyHistoryController { 
    constructor() {
        
    }
    
    async getHistoryByCurrencyId(currencyId, period) {    
        return await axios.get(`https://api.remessaonline.com.br/v1/graphic/${currencyId}?period_display=${period}`)
        .then(response => {
            return response.data.result
            
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    async fetchCurrencyHistoryPage(currencyId, period) {
        let currencies = require('./data/currencies')
        let periods = require('./data/periods')
        let history = await(this.getHistoryByCurrencyId(currencyId, period))        
        
        return {
            currencies, 
            periods,
            history : history.slice(0, 10),
            period: period,
            currencyId: currencyId
            
        }
    }
}

module.exports = currencyHistoryController