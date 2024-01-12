const express = require('express')
const router = express.Router()
const videosController = require('../controllers/videos') 



router.get('/videos', videosController.getIndex)


module.exports = router