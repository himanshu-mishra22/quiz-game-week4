const http = require("http");
const fs = require("fs").promises;

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + "/public/index.html")
        .then((data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        })
        .catch((err) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Internal Server Error");
            console.error(err);
        });

});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
