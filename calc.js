const http = require('http')

http.createServer((req, res)=>{
  res.statusCode(200,)
  res.writeHead('content-type', 'text/html')
  res.end('i love being a web developer')
}).listen(3000, ()=>{console.log('server running on specified port')})