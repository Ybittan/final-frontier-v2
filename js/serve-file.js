
const fs = require('fs');
const url = require('url');
const path = require('path');


module.exports = function serveFile(req, res) {
  var pathname = url.parse(req.url).pathname;
  var filePath = path.join('/final-frontier-cms/public/', pathname);

  fs.readFile(filePath, function(err, body){
  if(err) {
  res.statusCode = 404;
  res.statusMessage = "Not Found";
  res.end();
  return; 
}
    res.setHeader("Content-Length", body.length);
    
    switch(path.extname(filePath).toLowerCase()){
  case '.html':
  case '.htm':
    res.setHeader('Content-Type', 'text/html');
    break;
            
  case '.css':
    res.setHeader('Content-Type', 'text/css');
    break;
            
  case '.js':
    res.setHeader('Content-Type', 'text/javascript');
    break;
            
  case '.wav':
    res.setHeader('Content-Type', 'audio/wav');       
    break;
            
  case '.mp3':
    res.setHeader('Content-Type', 'audio/mpeg');       
    break;    
            
  case '.mov':
    res.setHeader('Content-Type', 'video/quicktime');       
    break;    
            
  case '.mp4':
    res.setHeader('Content-Type', 'video/mp4');       
    break;              
            
  case '.gif':
    res.setHeader('Content-Type', 'image/gif');       
    break;              
                        
  case '.jpeg':
    res.setHeader('Content-Type', 'image/jpeg');       
    break;              
                        
  case '.png':
    res.setHeader('Content-Type', 'image/png');       
    break;               
                        
  case '.pdf':
    res.setHeader('Content-Type', 'application/pdf');       
    break;    
                        
  case '.tff':
    res.setHeader('Content-Type', 'font/ttf');       
    break;    

  case '.woff':
    res.setHeader('Content-Type', 'font/woff');       
    break;  

  default:
    res.setHeader('Content-Type', 'application/octet-stream');
    break;
}
    res.end(body);
    
    
})
} 