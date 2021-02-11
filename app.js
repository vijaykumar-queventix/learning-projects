var http = require('http');

var url = "http://www.google.com";
http.get(url, (res)=>{
    console.log(`Got response  : ${res.statusCode}`);
}).on('error', (e)=>{
    console.log(`Got error : ${e.message}`);
});
