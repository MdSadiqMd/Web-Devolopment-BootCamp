import axios, { AxiosResponse, AxiosError } from "axios";

async function retryApiRequest<T>(
  apiCall: () => Promise<AxiosResponse<T>>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let retries: number = 0;

  const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const exponentialBackoff = async (): Promise<void> => {
    const delayTime: number = baseDelay * Math.pow(2, retries);
    await delay(delayTime);
  };

  const addJitter = async (ms: any): Promise<void> => {
    const randomJitter: number = Math.random() * 0.2 - 0.1; // Random jitter between -0.1 and 0.1
    const jitteredDelay: number = ms + ms * randomJitter;
    await delay(jitteredDelay);
  };

  while (retries < maxRetries) {
    try {
      const response: AxiosResponse<T> = await apiCall();
      return response.data;
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError;

      if (!axiosError.response) {
        // Network error, retry
        retries++;
        await addJitter(await exponentialBackoff());
      } else {
        // Non-retryable error, throw
        throw error;
      }
    }
  }

  throw new Error(`Max retries reached (${maxRetries})`);
}

// Example usage
const apiUrl: string = "https://api.example.com/data";

const apiCall = async (): Promise<AxiosResponse<any>> => {
  // Make your API request using axios
  return axios.get(apiUrl);
};

retryApiRequest(apiCall)
  .then((data: any) => {
    console.log("API call successful:", data);
  })
  .catch((error: Error) => {
    console.error("API call failed:", error.message);
  });
