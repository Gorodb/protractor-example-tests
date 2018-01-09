const fs = require('fs');
const screenshot = require('screenshot-stream');
 
const stream = screenshot('http://google.com', '1024x768', {crop: true});
 
stream.pipe(fs.createWriteStream('google.com-1024x768.png'));