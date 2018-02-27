'use strict'

const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should();
const sinon = require ('sinon')
const cHistoryController = require('./controller')
const server = require('../server')

chai.use(require('chai-things'))
chai.should() 
chai.use(chaiHttp)

describe('Unit tests for Currency History Controller', () => {
    let sandbox = sinon.sandbox.create()
    
    beforeEach( () => { 
        sandbox = sinon.sandbox.create()
    })
    
    afterEach( () => {
        sandbox.restore()
    })
    
    it('Should return the periodical history of a currency', async () => {
        let currencyHistoryController = new cHistoryController()
        let historyList = [{
            "id":3448,
            "id_currency":11,
            "date":"2013-01-01T00:00:00.000Z",
            "open":2.0626,
            "low":2.0601,
            "high":2.064,
            "close":2.0621,
            "updated_at":"2016-04-21T05:30:00.220Z",
            "total_items":"1710"
        }]
        
        let stubMethod = sinon.stub(currencyHistoryController, 'getHistoryByCurrencyId').returns(historyList)      
        
        let result = await currencyHistoryController.fetchCurrencyHistoryPage(11)
        
        result.should.be.an('object')
        result.should.have.property('history')
        result.should.have.property('periods')
        result.should.have.property('currencies')
        result.should.have.property('currencyId')
        result.should.have.property('period')
    })
})

describe('Integrated tests for Currency History Controller', () => {
    
    let sandbox = sinon.sandbox.create()
    
    beforeEach( () => { 
        sandbox = sinon.sandbox.create()
    })
    
    afterEach( () => {
        sandbox.restore()
    })
    
    
    describe('GET data for composing the history page', () => {
        it('It should get an object with history, periods and currencies.', done => { 
            
            const config  = require('../config/config')
            let url = `${config.apiPrefix}/currency-history/fetch-history-page`

            chai.request(server)
            .get(url)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('history')
                res.body.should.have.property('periods')
                res.body.should.have.property('currencies')
                res.body.should.have.property('currencyId')
                res.body.should.have.property('period')
                done();
            });
        })
    })
}) 