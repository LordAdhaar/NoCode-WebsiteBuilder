import React, {useState, useEffect} from "react";
import grapesjs from "grapesjs";
import "./styles/main.scss";
import gjsBasicBlocks from "grapesjs-blocks-basic";
import grapesjsExportPlugin from "grapesjs-plugin-export"

function App() {

  const [editor, setEditor] = useState(null)
  useEffect(() => {
  
    const editor = grapesjs.init({
      container : "#editor",
      plugins: [ gjsBasicBlocks, grapesjsExportPlugin] ,
      pluginOpts:{
        gjsBasicBlocks:{},
      }, 

    });

    editor.Panels.addPanel({
      el: '.gjs-pn-options',
      buttons: [
        {
          id: 'save-button',
          className: 'btn-save-button',
          label: 'Save',
          command(editor) { 
            console.log(editor.getHtml());
            console.log(editor.getCss());
            editor.runCommand("gjs-export-zip");
          }
        }
      ]
    });

    setEditor(editor);

    

  }, [])
  

  return (
    <div className="App">
        <div id="editor"></div>  
    </div>
  );
}

export default App;
