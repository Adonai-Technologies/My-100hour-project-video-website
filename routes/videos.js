const express = require('express')
const router = express.Router()
const videosController = require('../controllers/videos')

router.get('/', videosController.getTodos)

router.post('/createTodo', videosController.createTodo)

router.put('/markComplete', videosController.markComplete)

router.put('/markIncomplete', videosController.markIncomplete)

router.delete('/deleteTodo',videosController.deleteTodo)

module.exports = router