import React, {useState, useEffect} from "react";
import grapesjs from "grapesjs";
import "./styles/main.scss";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsBasicBlocks from "grapesjs-blocks-basic";

function App() {

  const [editor, setEditor] = useState(null)
  useEffect(() => {
  
    const editor = grapesjs.init({
      container : "#editor",
      plugins: [gjsPresetWebpage, gjsBasicBlocks] ,
      pluginOpts:{
        gjsPresetWebpage:{},
        gjsBasicBlocks:{},
      },
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
