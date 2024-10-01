// Importing the Redis client from the "client.js" file
const client = require("./client");

// Asynchronous function to interact with Redis
async function init() {
  // Uncomment the line below to set a value in Redis with the key "msg:4"
  // This would store the string "Hey from node" in Redis
  // await client.set("msg:4", "Hey from node");

  // Set the expiration time for the key "msg:4" to 10 seconds
  // This means that after 10 seconds, this key will be automatically deleted from Redis
  await client.expire("msg:4", 10);

  // Retrieve the value associated with the key "msg:4" from Redis
  const result = await client.get("msg:4");

  // Log the result to the console
  // If the key exists, it will print the value; if not, it will print null
  console.log("Result ->", result);
}

// Call the init function to run the Redis operations
init();
