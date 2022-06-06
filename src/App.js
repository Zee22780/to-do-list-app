import './App.css';
import { useState } from "react";
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index)=> {
        return(
          <Note
            key = {index}
            id = {index}
            title={noteItem.title}
            content={noteItem.conent}
          />
        )
      })}
    </div>
  );
}

export default App;
