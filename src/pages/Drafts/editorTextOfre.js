import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Butons from "../../controlers/Butons";
import "./App.css";

function EditorTextOfre() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [visible, setVisible] = useState(false);

  const publieOffre = () => {
    alert(editorState);
    console.log(editorState);
  };

  return (
    <div style={{ minHeight: "100%" }}>
      <div style={{ display: "flex", justifyContent: "end", margin: 10 }}>
        <Butons
          title={"Commencer a ecrire"}
          onClick={() => setVisible(!visible)}
        />
      </div>

      {visible === false ? (
        ""
      ) : (
        <div style={{ marginTop: 25, marginLeft: 100, marginRight: 100 }}>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            // defaultEditorState={editorState}
            // onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
          <div style={{ display: "flex", justifyContent: "end", margin: 10 }}>
            <Butons title={"Publie"} onClick={() => publieOffre()} />
          </div>
        </div>
      )}
    </div>
  );
}

export default EditorTextOfre;
