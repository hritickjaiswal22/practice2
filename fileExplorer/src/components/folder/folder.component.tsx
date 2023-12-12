import { useState } from "react";
import { FileStructure } from "../../containers/fileExplorer/fileExplorer.container";

import styles from "./folder.module.css";

export interface FolderComponentPropsTypes {
  explorer: FileStructure;
  insertNode: (folderId: string, name: string, isFolder: boolean) => void;
}

function FolderComponent({ explorer, insertNode }: FolderComponentPropsTypes) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  function stopPropagation(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
  }

  function handleNewFolder(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    stopPropagation(e);

    setShowInput({
      isFolder: true,
      visible: true,
    });
  }

  function handleNewFile(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    stopPropagation(e);

    setShowInput({
      isFolder: false,
      visible: true,
    });
  }

  function closeInput() {
    setShowInput({
      isFolder: false,
      visible: false,
    });
  }

  function keyDownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === "Enter") {
      insertNode(explorer.id, e.target.value, showInput.isFolder);
      closeInput();
    }
  }

  if (explorer.isFolder)
    return (
      <div
        className={styles["container"]}
        onClick={(e) => {
          setExpand((prev) => !prev);
          e.stopPropagation();
        }}
      >
        <div className={`${styles["folder"]} ${styles["flex"]}`}>
          <span>📁 {explorer.name}</span>

          <div className={styles["flex"]}>
            <button onClick={handleNewFolder}>Folder +</button>
            <button onClick={handleNewFile}>File +</button>
          </div>
        </div>
        {showInput.visible && (
          <>
            {showInput.isFolder ? "📁" : "📄"}
            <input
              onKeyDown={keyDownHandler}
              onBlur={closeInput}
              onClick={stopPropagation}
            />
          </>
        )}

        <div className={expand ? styles["expand"] : styles["collapse"]}>
          {explorer.items.map((item) => (
            <FolderComponent
              key={item.id}
              insertNode={insertNode}
              explorer={item}
            />
          ))}
        </div>
      </div>
    );

  return (
    <span onClick={stopPropagation} className={styles["file"]}>
      📄 {explorer.name}
    </span>
  );
}

export default FolderComponent;
