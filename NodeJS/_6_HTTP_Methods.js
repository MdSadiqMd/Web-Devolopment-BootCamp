// Go to a Browser and go to any Website
// Inspect > Network tab > Do something in Browser > Observe the Requests in name tab > Select a request and see the Details of the Request
// Writing a code example of Signup form that takes request and process it to profile page
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Parse the incoming URL
    const parsedUrl = url.parse(req.url, true);

    // Handle different HTTP methods
    if (req.method === 'GET') {
        // Handle GET requests
        if (parsedUrl.pathname === '/') {
            // Serve an HTML signup form
            const formPath = path.join(__dirname, 'signup.html');
            fs.readFile(formPath, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
        } else {
            // Handle other GET requests (e.g., for CSS, images, etc.)
            const filePath = path.join(__dirname, parsedUrl.pathname);
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Not Found');
                } else {
                    res.writeHead(200);
                    res.end(data);
                }
            });
        }
    } else if (req.method === 'POST') {
        // Handle POST requests (e.g., form submissions)
        if (parsedUrl.pathname === '/signup') {
            // Process the signup form data
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', () => {
                // Parse form data (e.g., username and password)
                const formData = new URLSearchParams(body);
                const username = formData.get('username');
                const password = formData.get('password');

                // Perform signup logic here (e.g., store user data in a database)
                // In a real application, you would use a database and handle errors and security properly.

                // Respond with a success message
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Signup successful! Welcome, ${username}!`);
            });
        }
    } else if (req.method === 'PUT') {
        // Handle PUT requests (update data)
        // Implement PUT logic here (e.g., update an existing resource)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('PUT request received.');
    } else if (req.method === 'DELETE') {
        // Handle DELETE requests (remove data)
        // Implement DELETE logic here (e.g., delete an existing resource)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('DELETE request received.');
    } else if (req.method === 'PATCH') {
        // Handle PATCH requests (partially update data)
        // Implement PATCH logic here (e.g., partially update an existing resource)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('PATCH request received.');
    } else {
        // Handle unsupported HTTP methods
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

// Start the server on port 8000
server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
