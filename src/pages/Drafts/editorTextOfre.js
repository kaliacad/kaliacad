import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Butons from "../../controlers/Butons";
import "./App.css";
import { RenderTextWithLinks } from "./recuperationoffre";

function EditorTextOfre() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [visible, setVisible] = useState(false);
  const [dataObject, setDataObject] = useState(null);
  const [dataObjetParse, setDataObjeParse] = useState(null);
  const [datalink, setDatalink] = useState(null);

  const onEditorChange = (editoreState) => {
    setEditorState(editoreState);
  };
  const publieOffre = () => {
    // sous forme de stringfy pour enregistre dababase
    const contentStat = editorState.getCurrentContent();
    const rowContent = JSON.stringify(convertToRaw(contentStat));
    //recuperation pour affichique au page web
    const parsedData = JSON.parse(rowContent);
    console.log(parsedData);

    setDataObjeParse(parsedData);
    if (parsedData && parsedData.blocks) {
      setDataObject(parsedData.blocks);
    }
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
          <h2>Données enregistrées :</h2>
          {dataObject && dataObject.length > 0 ? (
            <div>
              {dataObject.map((block, index) => (
                <p key={index}>
                  {RenderTextWithLinks({
                    text: block.text,
                    entityRangesLink: block.entityRanges,
                    dataObject: dataObjetParse,
                    inlineStyleRanges: block.inlineStyleRanges,
                  })}
                </p>
              ))}
            </div>
          ) : (
            <p>Aucune donnée à afficher.</p>
          )}
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorChange}
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
