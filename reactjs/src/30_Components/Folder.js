// Folder.js
import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div className="mt-2.5 ml-2.5">
        <div onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>
        </div>

        <div className={`ml-5 ${expand ? "block" : "hidden"} ${explorer.items.length > 0 ? "cursor-pointer" : ""}`}>
          {explorer.items.map((exp) => (
            <Folder explorer={exp} key={exp.id} />
          ))}
        </div>
      </div>
    );
  } else {
    
  }
};

export default Folder;
