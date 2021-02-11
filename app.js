const http = require('http');
const port = 3000;

// creating server
http.createServer((req, res)=>{
    const html = buildHtml(req);

    res.writeHead(200, {'content-type': 'text/html'});
    res.end(html);
}).listen(port, ()=>{
    console.log(`server running on ${port}`);
});

function buildHtml(req){
    var header ="";
    var body = '<h1>Node js generating first html</h1>';
    return '<!DOCTYPE html>' + '<html><header>' + header + '</header><body>' + body + '</body></html>'
}