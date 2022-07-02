// import mongoose 
var mongoose = require('mongoose')

var Queue = mongoose.Schema({
  queueNumber: {
    type: String,
    required: true
  },
},
{
  timestamps: true
})
 
// export model
module.exports = mongoose.model('Queues', Queue);