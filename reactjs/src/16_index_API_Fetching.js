export const getPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  