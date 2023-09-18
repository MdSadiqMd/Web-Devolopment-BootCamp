// Create a URL for the API you want to fetch data from
const apiUrl = "https://api.example.com/data";

// Create an options object to customize the fetch request
const fetchOptions = {
  method: "GET", // HTTP method (GET, POST, PUT, DELETE, etc.)
  headers: {
    // Headers (e.g., content type, authorization, etc.)
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
  },
  // Additional options:
  // mode: "cors", // CORS mode
  // cache: "no-cache", // Cache mode
  // redirect: "follow", // Redirect mode
  // credentials: "same-origin", // Credentials mode
  // body: JSON.stringify(data), // Request body data for POST or PUT requests
};

// Perform the fetch request using the URL and options
fetch(apiUrl, fetchOptions)
  .then((response) => {
    // Handle the response - Convert to JSON
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Handle the JSON data
    console.log("Data from the API:", data);
  })
  .catch((error) => {
    // Handle errors
    console.error("Fetch error:", error);
  });
// You can also use async/await for asynchronous fetch operations.

