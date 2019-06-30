/** @module requestHandler 
 * Provides a function for handling HTTP requests 
 * @param {http.incomingMessage} req - the request object
 * @param {http.serverResponse} res - the response object
*/
const serveFile = require('/home/codio/workspace/serve-file.js');

module.exports = function requestHandler(req, res) {
  
  
  if(req.method !== 'GET') {
  res.statusCode = 501;
  res.statusMessage = "Not Implemented";
  res.end();
  return;
}
}