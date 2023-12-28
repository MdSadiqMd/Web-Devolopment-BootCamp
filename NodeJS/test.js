const api = async () => {
  try {
    const response = await fetch("https://student.vrseconline.in/dashboard");
    console.log(response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
api();
