const useTreeTraversal = () => {
  function insertNode(tree,folderId,item,isFolder) {
    if(tree.id===folderId && tree.isFolder){
        tree.item.unshift({ // unshift add in first where push add at the last
            id:new Date().getTime(),
            name:item,
            isFolder,
            items:[]
        });
    }
  }
  return {insertNode}
};

export default useTreeTraversal