const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const viewaController = require('../controllers/videos')



router.get('/', homeController.getIndex)
router.get('/videos', viewaController.getIndex)

module.exports = router