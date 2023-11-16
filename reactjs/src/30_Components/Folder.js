import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput,setShowInput]=useState({
    visible:false,
    isFolder:null,
  });

  const stopPropagation=(e)=>{
    e.stopPropagation(); // This line disables the parent div onClick function
    setShowInput({
        visible:true,
        isFolder:false,
    })
  }

  if (explorer.isFolder) {
    return (
      <div className={`mt-2.5 ml-2.5 ${explorer.id === "1" ? "cursor-pointer" : ""}`}>
        <div onClick={() => setExpand(!expand)} className={explorer.id === "1" ? "cursor-pointer" : ""}>
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e)=>{stopPropagation(e)}}>📂+</button>
            <button onClick={(e)=>{stopPropagation(e)}}>📃+</button>
          </div>
        </div>

        <div className={`ml-5 ${expand ? "block" : "hidden"}`}>
          {
            showInput.visible && (
                <div>
                    <span> {showInput.isFolder? "📁" : "📄"} </span>
                    <input autoFocus onBlur={()=>setShowInput({...showInput,visible:false})} />
                </div>
            )
          }

          {/* This loop will recursively call the Folder Structure and render it */}
          {explorer.items.map((exp) => (
            <Folder explorer={exp} key={exp.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span className='flex-col'>📄{explorer.name}</span>
    );
  }
};

export default Folder;
