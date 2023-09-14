const logRequest = (req, res, next) => {
    console.log("Hi from Middleware");
    console.log(`${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`);
    next();
  };
  
  module.exports = logRequest;
  