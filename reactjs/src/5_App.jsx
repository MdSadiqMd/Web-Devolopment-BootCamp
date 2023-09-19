import React, { useEffect } from "react";
import Card from "./5_components/card";

function App() {
  useEffect(() => {
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
    <div className="bg-gray-100 min-h-screen p-4">
      <Card channel="Sadiq" /> {/*The channel is the props which is going to pass in the Card() Function */}
      <Card channel="Mohammad" />
    </div>
  );
}

export default App;
