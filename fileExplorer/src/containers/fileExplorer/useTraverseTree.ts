import { FileStructure } from "./fileExplorer.container";

function useTraverseTree() {
  function insertNode(
    tree: FileStructure,
    folderId: string,
    item: string,
    isFolder
  ) {
    if (tree.id === folderId && tree.isFolder) {
    }
  }

  return { insertNode };
}

export default useTraverseTree;
