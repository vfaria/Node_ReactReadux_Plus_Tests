const currencyHistory = require('./../currencyHistory/route')

const create = app => {
    currencyHistory.create(app)
}

module.exports =  { create }