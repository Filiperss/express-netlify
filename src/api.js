//Dependencies installed
const express = require('express')
const serverless = require('serverless-http')

//Creation of the Express Application
const app = express()

//Declare router
const router = express.Router()

//Create a route
router.get('/', (req, res) => {
	res.json({
		'course': 'Engenharia Informática 2020/21'
	})
})

//Integrate the router with the app
app.use('/.netlify/functions/api', router) // Bound the function to the directory, as required by Netlify

//Adapt the project to the serverless dependency
module.exports.handler = serverless(app)
