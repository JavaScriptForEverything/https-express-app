

# Develop Express app on **HTTPS** protocol


### Step-1: Clone this repository

###### package.json

	{
	  "name": "https-express",
	  "version": "1.0.0",
	  "main": "server.js",
	  "license": "MIT",
	  "scripts": {
	    "create-ca": "mkcert create-ca",
	    "create-cert": "mkcert create-cert ",

	    "dev": "nodemon .",
	    "start": "NODE_ENV=production node ."
	  },
	  "dependencies": {
	    "dotenv": "^16.0.1",
	    "express": "^4.18.1"
	  },
	  "devDependencies": {
	    "mkcert": "^1.5.0",
	    "nodemon": "^2.0.19"
	  }
	}


### Step-2: Download and Generate require files

###### Run every command line by line

	$ yarn install 				: install all dependencies & devDependencies
	$ yarn create-ca 			: Generate Certificate Authority files
	$ yarn create-cert 			: Generate Local User Certificate files
	$ yarn dev 				: To Run as development mode

	$ yarn start 				: To Run as production  mode


### Step-3: Check in Browser

	. https://localhost:8080 		: use **HTTPS**, instead of **HTTP**







# Method-2: Here is the steps explain everything.

###### **Step-0:** install `mkcert` library globally

	**$** `npm install mkcert` 		: (windows)
	**$** `sudo npm install mkcert` 	: (Linux or Mac)


###### **Step-1:** Create who will check certificate

	**$** `mkcert create-ca` 		: => ca.key 	ca.crt


###### **Step-2:** create local certificate, which will enable our application on localhost to be 'secure'

	**$** `mkcert create-cert` 		: => cert.key 	cert.crt


###### **Step-3:** move cert.key cert.crt (in step-2) to our project directory

	const https = require('https')
	const fs = require('fs')
	const express = require('express')

	const app = express()
	app.use(express.json('200k'))
	app.get('/', (req, res, next) => res.status(200).json({ status: 'success' }))

	const options = {
	  key: fs.readFileSync('./cert.key'),
	  cert: fs.readFileSync('./cert.crt'),
	}
	const server = https.createServer(options, app)
	server.listen(8080, () => console.log(`HTTPS server started on port 8080`) )
