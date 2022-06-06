import './App.css';
import { useState } from "react";
import Header from './components/Header';
import CreateArea from './components/CreateArea';

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
    </div>
  );
}

export default App;
