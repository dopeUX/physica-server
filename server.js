const express = require('express');
const {setupNativeMongoConnection, app, router} = require('./connection');
const { getPort } = require('./utils/getEnvs');
const PORT = getPort();
const userRouter = require('./router/UserRouter');
const therapistRouter = require('./router/TherapistRouter');
const appointmentRouter = require('./router/AppointmentRouter');

require("dotenv").config();

const setupMongoDBConnection = async() => {
	const res = await setupNativeMongoConnection();
	if (res) {
		app.listen(PORT, (error) => {
			if(!error) {
				console.log('Server is Successfully Running on PORT ' + PORT);
			 } else {
				console.log('Connection error')
			 }
		})
	  } else {
		  console.log("Connection error");
	  }
}


setupMongoDBConnection();


router.route("/").get(async(req, res) => {
	res.send("Physica-server-release - 1.0.0")
})

app.use("/api/", therapistRouter);
app.use("/api/", userRouter);
app.use("/api/", appointmentRouter);

app.use(router);