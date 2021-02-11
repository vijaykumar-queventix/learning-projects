const http = require('http');
const port = 3000;

// creating server
http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('this is first program');
}).listen(port, ()=>{
    console.log(`server running on ${port}`);
})