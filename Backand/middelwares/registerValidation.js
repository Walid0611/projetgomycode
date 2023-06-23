const { body, validationResult } = require('express-validator');


exports.registerValidation=[
    body('email','please enter a valid email address').isEmail(),
    body('password','please enter a password of 8 car').isLength({min:8})

]

exports.loginValidation=[
    body('email','please enter a valid email address').isEmail(),
    
]


exports.validation =(req,res,next)=>{
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}