import React, { useState } from "react";
import useTraverseTree from "../30_Hooks/useTraverseTree";

function Folder({ handleInsertNode, handleDeleteNode, handleRenameNode, explorer }) {
  const { insertNode, deleteNode, renameNode } = useTraverseTree();
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
    value: "",
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
      value: "",
    });
  };

  const onAddNode = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      const newNode = {
        id: new Date().getTime(),
        name: e.target.value,
        isFolder: showInput.isFolder,
        items: [],
      };

      if (showInput.isFolder) {
        handleInsertNode(explorer.id, newNode);
        setExpand(true); // Automatically expand when adding a new folder
      } else {
        handleInsertNode(explorer.id, newNode);
      }

      setShowInput({ ...showInput, visible: false, value: "" });
    }
  };

  const onDeleteNode = () => {
    handleDeleteNode(explorer.id);
  };

  const onRenameNode = () => {
    if (showInput.value) {
      handleRenameNode(explorer.id, showInput.value);
      setShowInput({ ...showInput, visible: false, value: "" });
    }
  };

  return (
    <div style={{ marginTop: 5 }}>
      <div onClick={() => setExpand(!expand)} className={explorer.isFolder ? "folder" : "file"}>
        <span>{explorer.isFolder ? "📁" : "📄"} {explorer.name}</span>
        <div>
          <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
          <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          <button onClick={onDeleteNode}>Delete</button>
          <button onClick={onRenameNode}>Rename</button>
        </div>
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
        {showInput.visible && (
          <div className="inputContainer">
            <span>{showInput.isFolder ? "📁" : "📄"}</span>
            <input
              type="text"
              className="inputContainer__input"
              autoFocus
              value={showInput.value}
              onChange={(e) => setShowInput({ ...showInput, value: e.target.value })}
              onKeyDown={onAddNode}
              onBlur={() => setShowInput({ ...showInput, visible: false, value: "" })}
            />
          </div>
        )}

        {explorer.items.map((exp) => (
          <Folder
            key={exp.id}
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
            handleRenameNode={handleRenameNode}
            explorer={exp}
          />
        ))}
      </div>
    </div>
  );
}

export default Folder;
