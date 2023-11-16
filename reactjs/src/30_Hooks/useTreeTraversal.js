import { useState } from "react";

const useTraverseTree = () => {
  const insertNode = (tree, parentId, newNode) => {
    if (tree.id === parentId) {
      tree.items.unshift(newNode);
      return tree;
    }

    const updatedItems = tree.items.map((item) => insertNode(item, parentId, newNode));
    return { ...tree, items: updatedItems };
  };

  const deleteNode = (tree, nodeId) => {
    const updatedItems = tree.items.filter((item) => item.id !== nodeId);
    return { ...tree, items: updatedItems };
  };

  const renameNode = (tree, nodeId, newName) => {
    const updatedItems = tree.items.map((item) => {
      if (item.id === nodeId) {
        return { ...item, name: newName };
      }
      return renameNode(item, nodeId, newName);
    });
    return { ...tree, items: updatedItems };
  };

  return { insertNode, deleteNode, renameNode };
};

export default useTraverseTree;
