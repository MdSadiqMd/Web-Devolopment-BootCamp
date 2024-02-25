const apiUrl = "https://dummyjson.com/products";

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

fetch(apiUrl, fetchOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data from the API:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
