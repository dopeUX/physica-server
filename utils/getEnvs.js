require('dotenv').config();

const getConnectionString = () => {
	return process.env.CONNECTION_STRING;
}

const getPort = () => {
	return process.env.PORT;
}

const getDB = () => {
	return process.env.DB;
}

const getCollection = () => {
	return {
       THERAPISTS:"therapists",
       USERS:"users",
       APPOINTMENTS:"appointments"
    };
}


module.exports = {getConnectionString, getPort, getDB, getCollection};