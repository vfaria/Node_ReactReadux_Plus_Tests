/** @module currencyHistory/service */

import axios from 'axios'

class service { 
    constructor(apiPrefix) {
        this.apiPrefix = apiPrefix
    }

    fetchHistoryPage(currencyId = '', period = '') {
        let url = `${this.apiPrefix}/currency-history/fetch-history-page?\currencyId=${currencyId}&period=${period}`

         return axios.get(url)
    }    
}

export default service

