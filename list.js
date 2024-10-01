// Importing the Redis client that was initialized in the "client.js" file
const client = require("./client");

// Asynchronous function to interact with Redis
async function init() {
  // Pushing values into the Redis list called "messages" (commented out for now)
  // lpush adds elements to the left (front) of the list
  // Uncomment these lines if you want to prepopulate the "messages" list for testing
  // await client.lpush("messages", 1);
  // await client.lpush("messages", 2);
  // await client.lpush("messages", 3);
  // await client.lpush("messages", 4);

  // blpop is a blocking operation that waits for a specified timeout (30 seconds in this case)
  // It removes and returns the first element from the "messages" list if it exists
  // If the list is empty, it will wait until an element is added or the timeout expires
  const result = await client.blpop("messages", 30);

  // Log the result to the console, this will print the list name and the value popped
  console.log(result);
}

// Call the init function to run the Redis operations
init();
