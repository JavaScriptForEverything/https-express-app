require('dotenv').config()
const https = require('https')
const fs = require('fs')
const app = require('./app')


const PORT = process.env.PORT || 4430  		// 443 => 4430
const options = {
	key: fs.readFileSync('./ssl/cert.key'),
	cert: fs.readFileSync('./ssl/cert.crt'),
}

const server = https.createServer(options, app)

server.listen(PORT, () => console.log(`Server is running on 'HTTPS' protocol on port: ${PORT}`) )
