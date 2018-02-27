/** @module currencyHistory/route */ 

const express = require('Express')
const axios = require('axios') 

const CurrencyHistoryController = require('./controller')
const serverConfig = require('../config/config')

const router = express.Router()

const create = (app) => {
    let routePrefix = '/currency-history'

    currencyHistoryController = new CurrencyHistoryController()

    router.route('/fetch-history-page').get( async (req, res) => {
        let currencyId = req.query.currencyId ? req.query.currencyId  : 11 
        let period = req.query.period ?  req.query.period : 'weekly'

        let result = await currencyHistoryController.fetchCurrencyHistoryPage(currencyId, period)

        if (! (Array.isArray(result.history) && result.history.length > 0)) { 
            res.status(500).send('An error has occured')
        }
        
        res.send(result)
    })
    
    app.use(`${serverConfig.apiPrefix}${routePrefix}`, router)
}

module.exports =  { create } ;
