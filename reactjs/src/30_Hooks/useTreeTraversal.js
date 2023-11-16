import { useState } from "react";

const useTreeTraversal = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
    } else {
      // Recursive search for the correct folderId
      tree.items.forEach((child) => {
        insertNode(child, folderId, item, isFolder);
      });
    }
  }

  return { insertNode };
};

export default useTreeTraversal;
