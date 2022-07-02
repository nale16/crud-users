var Queue = require('../models/queue')

// Create a queue
exports.createQueue = async (req, res) => {
  var payload = new Queue({
    queueNumber: req.body.queueNumber
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