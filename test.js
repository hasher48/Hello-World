const list = ['apple', 'banana', 'bitruit', 'waterMelon']
const items = {
    car: 'ferrari',
    gun: 'M4 carbine',
    utensils: ['spoon', 'tea-spoon', 'table-knife', 'fork']

}
console.log(items.utensils[1])
console.log(list.length)

// const http = require('http')
// const port = 8080


// http.createServer((req, res)=> {
//     res.writeHead (200, {'Content-type':'text/plain'});
//     res.write('Hello World! and /n');
//     res.end()
// }).listen(port, ()=> {console.log(`server listening on port ${port}`)})