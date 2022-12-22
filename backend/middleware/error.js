const ErrorHandler = require('../utilis/errorHandler');

module.exports = (err,req,res,next) => {

  err.statusCode = err.statusCode || 404;
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDb Id error

  if(err.name === 'CastError'){
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 404);
  }

  // Mongoose duplicate key error

  if(err.code === 11000){
    const message = `Duplictate ${Object.keyValue} Entered`;
    err = new ErrorHandler(message, 404);
  }

    // Wrong JWT error

    if(err.name === 'jsonwebTokenError'){
      const message = `Json web Token is Invalid, try again`;
      err = new ErrorHandler(message, 404);
    }

    // JWT Expire error 

    if(err.name === 'TokenExpiredError'){
      const message = `Json web Token is Expired, try again`;
      err = new ErrorHandler(message, 404);
    }

  res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
};