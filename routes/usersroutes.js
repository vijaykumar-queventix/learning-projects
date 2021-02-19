const router = require('express').Router();
const useroutes = require('../controllers/usercontroller');
const { userValidationRules, validate } = require('../validations/userregister');


router.get('/', useroutes.register);

// register post api
router.post('/',userValidationRules(), validate, useroutes.register);

// login post api
router.post('/login',  useroutes.login);


module.exports = router