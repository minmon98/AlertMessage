const express = require("express")

var router = express.Router()

router.get("/", function (req,res) {
	res.json({message: "Successfully"})
})

module.exports = router