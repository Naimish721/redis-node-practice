// Importing the Redis client from the "ioredis" library
const { Redis } = require("ioredis");

// Creating a new Redis client instance, which will connect to the Redis server.
// If no host/port is specified, it will default to localhost:6379.
const client = new Redis();

// Exporting the Redis client so it can be used in other files.
// This allows other modules to use the same Redis connection.
module.exports = client;
