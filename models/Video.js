const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
  video: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('Video', VideoSchema)
