const url = require('url');
const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const productsData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*' /* @dev First, read about security */,
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };

  const pathname = req.url;
  if (pathname === '/' || pathname === '/overview') {
    res.end('This is an overview');
  } else if (pathname === '/products') {
    res.end('This is a products');
  } else if (pathname === '/api') {
    res.writeHead(200, headers, { 'Content-Type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
    });
    res.end('<h1>404 Error!  Page Not Found</h1>');
  }
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Listening to requests on port 5000.');
});