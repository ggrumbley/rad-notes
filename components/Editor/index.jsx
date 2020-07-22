import React, { useContext } from 'react';
import { StoreContext } from '../../hooks';

const Editor = () => {
  const { state } = useContext(StoreContext);
  const note = state.notes[0];

  return (
    <div className="editor">
      <div>
        {note.id}
      </div>
      <div>
        {note.title}
      </div>
      <div>
        {note.body}
      </div>
    </div>
  )
}

export default Editor
