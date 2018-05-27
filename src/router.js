const express = require('express')
const bodyParser = require('body-parser')
const healthController = require('./health/healthController')
const healthRouter = express.Router()

healthRouter.get('/', healthController.get)

module.exports = {
  enroute: (app) => {
    app.use(bodyParser.json())
    app.use('/healthz', healthRouter)
  }
}
