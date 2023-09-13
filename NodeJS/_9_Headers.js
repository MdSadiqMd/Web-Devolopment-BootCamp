const http = require('http');

const server = http.createServer((req, res) => {
  // Set the status code (200 for success)
  res.statusCode = 200;

  // Set the Content-Type header to indicate JSON data
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // Set custom headers using the "X-" prefix it's a good practice that's it
  res.setHeader('X-Custom-Header', 'SomeValue');
  res.setHeader('X-Request-ID', '12345');

  // Simulate sending JSON data as the response body
  const responseData = { message: 'Hello, World!' };

  // Serialize the JSON data to a string and send it as the response body
  const responseBody = JSON.stringify(responseData);
  res.write(responseBody);

  // End the response
  res.end();
});

server.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
