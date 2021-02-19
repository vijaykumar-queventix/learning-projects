const { check, validationResult } = require('express-validator')

const userValidationRules = () => {
  return [

    check('firstname').toUpperCase(),
    check('lastname').toUpperCase(),
    check('phone_number').isLength(10).optional(),
    // username must be an email
    check('email', 'Name must Be an in email formate').isEmail(),
    // password must be at least 5 chars long
    check('password', 'password length is less than 5').isLength({ min: 5 }),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  //console.log(validationResult(req));
  //console.log(typeof(errors));

  if (!errors.isEmpty()) {
    return res.status(200).json({ 
        'statusCode' : 400,
        'message' : 'validation Failed !!',
        errors: errors.array() });
}
next();
}

module.exports = {
  userValidationRules,
  validate,
}
