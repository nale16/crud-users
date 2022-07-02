var express = require('express');
var router = express.Router();
var queue = require('../controllers/queue')

/* CREATE a queue. */
router.post('/', queue.createQueue)

module.exports = router;
