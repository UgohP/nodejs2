const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1> Home Page</h1>');
        res.end()
    }else if (req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1> About Page</h1>');
        res.end()
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('error')
    }
})

server.listen(5000, () => {
    console.log('app listening on port 5000')
})

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<h1>Home Page</h1>');
//         res.end();
//     } else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('This is the about page');
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('Error page');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is listening on port 8000');
// });
