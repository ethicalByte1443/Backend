const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end('Welcome to Home Page!!!')
        console.log(req.url)
    }

    else if(req.url == '/profile'){
        res.end('Current Ranking 1')
        console.log(req.url);
    }

    else{
        res.end('Page not Found')
        console.log(req.url);
    }
})

server.listen(3000, console.log('Server Started {http://localhost:3000}'))