import { useState , useEffect} from 'react'

import './App.css'
import axios from 'axios'
import Show from './Show'
// import Show from './Show.jsx'
function App() {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [response,setResponse ] = useState({})
 
  const handleTitle = (e)=>{
      setTitle(e.target.value);
  }
  const handleDescription = (e)=>{
    setDescription(e.target.value)
  }

  
    const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      console.log("before requesting")
        const note = await axios.post("http://localhost:5000/api/notes", {title,description});
        setResponse( note.data)
        console.log("after requesting")
        console.log("server response ",note.data)
        console.log('setrepose : ',response)
        setTitle("");
        setDescription("");
    }catch(err){
      console.log(err)
    }
  }


    // useEffect(()=>{
    //   console.log('changes reflected...')
    // },[title,description])
  
   useEffect(() => {
    if (Object.keys(response).length > 0) {
      console.log('The response state has been updated to: ', response);
    }
  }, [response]);
// Input fields for title and description, plus a “Add Note” button.
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='title' id='title' onChange={handleTitle} placeholder='Enter the title for note' value={title}/> <br />
        <input type="text"  id='desc' name='description' onChange={handleDescription} placeholder='Enter description for note' value={description}/> <br />
        <button type='submit'> Add a note </button>
      </form>
      <p>{response.message}</p>
     <Show></Show>
    </>
  )
}

export default App
