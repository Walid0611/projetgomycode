const { body, validationResult } = require('express-validator');


exports.BookingValidation=[
    body('model','please enter a model').isModel(),
    body('bookedTimeSLots','please enter a date ').isBookedTimeSLots(),
    body('image','please enter a photo ').isImage(),
    body('totalHours','please enter a time ').isTotalHours(),


]




exports.validation =(req,res,next)=>{
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}