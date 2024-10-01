// Importing the Express framework to create a web server
const express = require("express");
// Creating an instance of an Express application
const app = express();
// Importing the Axios library for making HTTP requests
const axios = require("axios");
// Importing the Redis client instance from "client.js"
const client = require("./client");

// Setting up a GET route for the root URL ("/")
app.get("/", async (req, res) => {
  // Attempting to retrieve the cached value for "todos" from Redis
  const cacheValue = await client.get("todos");

  // If the cached value exists, parse it and return it as a JSON response
  if (cacheValue) {
    return res.json(JSON.parse(cacheValue));
  }

  // If no cached value, make a GET request to the JSONPlaceholder API to fetch todos
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  // Store the fetched data in Redis with the key "todos"
  await client.set("todos", JSON.stringify(data));
  // Set an expiration time of 30 seconds for the cached data in Redis
  await client.expire("todos", 30);

  // Return the fetched data as a JSON response
  return res.json(data);
});

// Start the Express server and listen on port 9000
app.listen(9000, () => console.log("Server listening at port 9000"));
