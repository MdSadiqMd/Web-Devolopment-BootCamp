import { v4 as uuidv4 } from "uuid";
import * as redis from "redis";

// Initialize a Redis client
const redisClient = redis.createClient();

// Function to generate Idempotency keys
function generateIdempotencyKey(parameters: any): string {
  // Generate a unique ID based on different parameters
  const idempotencyKey = uuidv4();
  redisClient.set(idempotencyKey, JSON.stringify(parameters), "EX", 3600); // Set expiration time (e.g., 1 hour)

  return idempotencyKey;
}

// Function to check if Idempotency key exists in Redis
function isIdempotencyKeyExists(idempotencyKey: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    redisClient.exists(idempotencyKey, (error: any, reply: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(Boolean(reply));
      }
    });
  });
}

async function handlePaymentRequest(clientRequest: any) {
  // Convert the client request into an idempotency key
  const idempotencyKey = generateIdempotencyKey({
    amount: clientRequest.amount,
    service: clientRequest.service,
  });

  const keyExists = await isIdempotencyKeyExists(idempotencyKey);

  if (keyExists) {
    console.log(
      `Request with Idempotency Key ${idempotencyKey} already processed. Ignoring.`
    );
  } else {
    const requestHeaders = {
      "Idempotency-Key": idempotencyKey,
      // Add other headers as needed
    };
    sendPaymentRequestToStripe(clientRequest, requestHeaders);
  }
}

function sendPaymentRequestToStripe(clientRequest: any, headers: any) {
  // Replace the below line with your actual Stripe API request logic
  console.log(
    `Sending payment request to Stripe with Idempotency Key: ${headers["Idempotency-Key"]}`
  );
}

const paymentRequestExample = {
  amount: 10000,
  service: "payment",
};

handlePaymentRequest(paymentRequestExample);
