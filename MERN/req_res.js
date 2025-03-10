const http = require('http')        // http  installed with node.js by default

// Creating a server
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello World')
})

// listening 
server.listen(3000)
