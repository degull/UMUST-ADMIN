// Editor.js
/* import React from 'react';
import { Editor as WysiwygEditor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = React.forwardRef(({ toolbar, uploadCallback }, ref) => {
  return (
    <WysiwygEditor
      ref={ref}
      toolbar={toolbar}
      placeholder="내용을 입력하세요."
      editorStyle={{
        height: '400px',
        width: '100%',
        border: '3px solid lightgray',
        padding: '20px',
      }}
      uploadCallback={uploadCallback}
    />
  );
});

export default Editor;
 */
// Editor.js
import { Editor as WysiwygEditor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = WysiwygEditor;

export default Editor;
