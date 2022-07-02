var express = require('express');
var router = express.Router();
var user = require('../controller/users')
const { validate } = require('../middlewares')
const validation = require('../validations')

/* GET users listing. */
router.get('/', user.getUsers)

/* CREATE a user. */
router.post('/', validate(validation.userValidate), user.createUser)

/* GET a user. */
router.get('/:id', user.getUser)

module.exports = router;
