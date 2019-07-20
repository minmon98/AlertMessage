const express = require("express")
const config = require("config")

var app = express()

let controllers = require(__dirname + "/apps/controllers")
app.use(controllers)

let host = config.get("server.host")
let port = config.get("server.port")
app.listen(port, host, function (req,res) {
	console.log("Server is running on port ", port)
})
