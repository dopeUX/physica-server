const express = require('express');
const {MongoClient, ServerApiVersion}= require('mongodb');
// const ServerApiVersion = require('mongodb');
const cors = require('cors');
const { getConnectionString } = require('./utils/getEnvs');

const app = express();
const router = express.Router();
const connectionString = getConnectionString();
const config = {
	serverApi: {
	  version: ServerApiVersion.v1,
	  strict: true,
	  deprecationErrors: true,
	}
  }
const client = new MongoClient(connectionString, config);

app.use(express.json());


const setupNativeMongoConnection = async() => {
  let res;	
  try {
    res = await client.connect();
	console.log("Connected to Mongo DB Client - Physica");
	return res;
  } catch(err) {
     console.log("Error Connecting Mongo DB Client", err)
	 throw new Error("Couldn't establish connection to Mongo DB Client");
  }
}

const closeNativeMongoConnection = async() => {
	try {
		await client.close();
		console.log("Connection to Mongo DB Client was successfully closed.")
	} catch(err) {
		console.log("Error closing Mongo Db Connection", err)
		throw new Error("Couldn't close Mongo Db Connection")
	}
}

app.use(cors());

module.exports = {client, setupNativeMongoConnection, closeNativeMongoConnection, router, app};