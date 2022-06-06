import { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title:"",
    content: "",
  })

  function handleChange(event){
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event){
    props.onAdd(note)
    setNote({
      title: "",
      conten: ""
    })
    event.preventDefault()
  }

  return ( 
    <div>
      <form className="create-note">
        <input 
          type="text" 
          name="title" 
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea 
          name="content" 
          rows="3"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;