// Without Express

// const http = require('http');

// const server = http.createServer((request, response) => {
//     // console.log(request.headers)
//     console.log(request.method)
//     console.log(request.url)
//     const user = {
//         name: 'John',
//         hobby: 'Skating'
//     }
//     response.setHeader('Content-Type', 'text/html');
//     response.end(JSON.stringify(user));
// })

// server.listen(3001);



// With Express

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("getting root")
// })

// app.get('/profile', (req, res) => {
//     res.send("getting profile")
// })

// app.post('/profile', (req, res) => {
//     console.log(req.body);
//     const user = {
//         name: 'Sally',
//         hobby: 'Soccer'
//     }
//     res.send(user);
// })

app.listen(3001);