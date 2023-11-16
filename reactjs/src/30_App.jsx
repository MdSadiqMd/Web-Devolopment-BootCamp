import React, { useState } from 'react'
import Folder from './30_Components/Folder'
import useTraverseTree from './30_Hooks/useTreeTraversal';

const App = () => {
  // Dummy Data
  const explorer = {
    id:"1",
    name: "root",
    isFolder: true,
    items: [
      {
        id:"2",
        name: "public",
        isFolder: true,
        items: [
          {
            id:"3",
            name: "public nested 1",
            isFolder: true,
            items: [
              {
                id:"4",
                name: "index.html",
                isFolder: false,
                items: []
              },
              {
                id:"5",
                name: "hello.html",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id:"6",
            name: "public_nested_file",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"7",
        name: "src",
        isFolder: true,
        items: [
          {
            id:"8",
            name: "App.js",
            isFolder: false,
            items: []
          },
          {
            id:"9",
            name: "Index.js",
            isFolder: false,
            items: []
          },
          {
            id:"10",
            name: "styles.css",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"11",
        name: "package.json",
        isFolder: false,
        items: []
      }
    ]
  };

  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode, renameNode } = useTraverseTree(); // Import the hook

  const handleInsertNode = (parentId, newNode) => {
    const updatedExplorer = insertNode({ ...explorerData }, parentId, newNode);
    setExplorerData(updatedExplorer);
  };

  const handleDeleteNode = (nodeId) => {
    const updatedExplorer = deleteNode({ ...explorerData }, nodeId);
    setExplorerData(updatedExplorer);
  };

  const handleRenameNode = (nodeId, newName) => {
    const updatedExplorer = renameNode({ ...explorerData }, nodeId, newName);
    setExplorerData(updatedExplorer);
  };

  return (
    <div>
      <Folder
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleRenameNode={handleRenameNode}
        explorer={explorerData}
      />
    </div>
  );
}

export default App;
