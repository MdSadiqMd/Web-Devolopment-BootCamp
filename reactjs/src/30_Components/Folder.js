import React, { useState } from "react";
import { useTreeTraversal } from "../30_Hooks/useTreeTraversal"

const Folder = ({ explorer }) => {
  const [explorerData, setExplorerData] = useState(false);

  // Dynamic Rendering
  const {insertNode}=useTreeTraversal();
  const handleInsertNode=(folderId,item,isFolder)=>{
    const finalTree=insertNode(explorerData,folderId,item,isFolder)
    setExplorerData(finalTree)
  }

  return(
    <div>
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  )

  // The UI rendering with respect to Dummy Data
  /*const [showInput,setShowInput]=useState({
    visible:false,
    isFolder
  });

  const stopPropagation=(e)=>{
    e.stopPropagation(); // This line disables the parent div onClick function
    setExpand(true);
    setShowInput({
        visible:true,
        isFolder:false,
    })
  }

  const onAddFolder=(e)=>{
    if(e.keyCode===13 && e.target.value){
        setShowInput({...showInput,visible:false});
    }
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
                    <input autoFocus
                     onBlur={()=>setShowInput({...showInput,visible:false})}
                     onKeyDown={onAddFolder} /> {/*onKeyDown is when the enter get Pressed */}
            /*    </div>
            )
          }

          {/* This loop will recursively call the Folder Structure and render it */}
          /*{explorer.items.map((exp) => (
            <Folder explorer={exp} key={exp.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <span className='flex-col'>📄{explorer.name}</span>
    );
  }*/
};

export default Folder;
