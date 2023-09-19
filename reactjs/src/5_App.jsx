import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Create a <link> element
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
    link.rel = "stylesheet";

    // Append the <link> element to the <head> of the document
    document.head.appendChild(link);

    // Clean up: Remove the <link> element when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <>
      <h1 className="bg-green-400">Tailwind test</h1>
    </>
  );
}

export default App;
