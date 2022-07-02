// import mongoose 
var mongoose = require('mongoose')

var User = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    require: true
  }
},
{
  timestamps: true
})
 
// export model
module.exports = mongoose.model('Users', User);