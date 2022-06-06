import RemoveIcon from '@mui/icons-material/Remove';


const Note = (props) => {
  return ( 
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <RemoveIcon />
    </div>
  );
}

export default Note;