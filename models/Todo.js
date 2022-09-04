const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  day: {                        // added a new attribtue to the schema, it's always going to have a value defaulted to 'Monday'
    type: String,               // so the required isn't necessary but idk what else to put
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
