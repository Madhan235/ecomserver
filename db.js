import { MongoClient, ObjectId } from "mongodb"; // Importing MongoClient and ObjectId from mongodb
import dotenv from "dotenv";

dotenv.config();
const url = process.env.MONGO;

async function createConnection() {
  const client = new MongoClient(url);

  try {
    // Connecting to the MongoDB server
    await client.connect();
    console.log("MongoDB server connected");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process if connection fails
  }

  return client; // Return the client instance
}

// Export the ObjectId and client instance
export var objectId = ObjectId;
export const client = await createConnection();
