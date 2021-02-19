const router = require('express').Router();
const usercontroller = require('../controllers/usercontroller');
const { userValidationRules, validate } = require('../validations/userregister');
const JwtAuth = require('../validations/jwtAuthentication');


router.get('/', usercontroller.register_get);
router.get('/login', usercontroller.login_get)

// register post api
router.post('/',userValidationRules(), validate, usercontroller.register_post);

// login post api
router.post('/login',  usercontroller.login_post);


//dashboard get api
router.get('/dashboard', JwtAuth, usercontroller.dashboard_get);


// update put api
router.put('/update/:id',usercontroller.update_put);


module.exports = router