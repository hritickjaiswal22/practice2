import { useState } from "react";

import initialData from "../../data/data";
import Folder from "../../components/folder";

export interface FileStructure {
  id: string;
  name: string;
  isFolder: boolean;
  items: Array<FileStructure>;
}

function FileExplorerContainer() {
  const [explorerData, setExplorerData] = useState<FileStructure>(initialData);

  function getTree(
    tree: FileStructure,
    folderId: string,
    name: string,
    isFolder: boolean
  ) {
    if (tree.id === folderId && tree.isFolder) {
      const newArr = [...tree.items];

      newArr.push({
        id: `${Date.now()}`,
        isFolder,
        name: name,
        items: [],
      });

      const temp = { ...tree };
      temp.items = newArr;

      return temp;
    }

    const newArr = tree.items.map((item) =>
      getTree(item, folderId, name, isFolder)
    );

    const temp = { ...tree };
    temp.items = newArr;

    return temp;
  }

  function insertNode(folderId: string, name: string, isFolder: boolean) {
    setExplorerData(getTree(explorerData, folderId, name, isFolder));
  }

  return <Folder insertNode={insertNode} explorer={explorerData} />;
}

export default FileExplorerContainer;
