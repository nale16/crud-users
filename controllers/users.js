var User = require('../models/users')

// Get all users
exports.getUsers = async (req, res) => {
  try {
    var data = await User.find().select('-__v')

    return res.json({
      status: 200,
      code: '200',
      message: 'Success',
      data: {
        count: data.length,
        data
      }
    })
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a user
exports.createUser = async (req, res) => {
  var payload = new User({
    name: req.body.name,
    address: req.body.address,
    age: req.body.age,
    sex: req.body.sex,
    phone: req.body.phone,
    birthdate: req.body.birthdate
  })

  try {
    var data = await payload.save()

    return res.status(201).send({
      status: 201,
      code: '201',
      message: 'Success',
      data,
    })
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a user
exports.getUser = async (req, res) => {
  try {
    var userId = req.params.id
    var data = await User.findById(userId).select('-__v')

    if (!data) {
      console.log('hello wrold')
      return res.status(400).send({
        status: 400,
        code: '400',
        message: 'User not found.',
      })
    }

    return res.status(200).send({
      status: 200,
      code: '200',
      message: 'Success',
      data
    })
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}