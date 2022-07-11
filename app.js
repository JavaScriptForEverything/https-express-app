const express = require('express')

const app = express()

app.use(express.json('200k'))

app.get('/', (req, res, next) => {
	res.status(200).json({
		status: 'success',
		message: 'HTTPS access'
	})
})


module.exports = app
