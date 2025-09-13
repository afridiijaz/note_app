import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Show.css";
function Show() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/notes");
      console.log(response);

      setData(response.data.notes);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Error during fetching notes");
      setData([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  const handleShowNotes = (e) => {
    e.preventDefault();
    fetchNotes();
  };
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  if (loading) {
    return <p>Loading ...</p>;
  }

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      // setData((prevNotes) => prevNotes.filter((note) => note._id !== id));
       setData((prevNotes) => prevNotes.filter((note) => note._id !== id));
      console.log(`Note with ID ${id} deleted successfully.`);
    } catch (e) {
      setError("can Delete the item");
      console.log(e);
    }
  };
  // ... (rest of your component code)
  return (
    <div className="note-container">
      <form>
        <button className="show-notes-button" onClick={handleShowNotes}>
          Show all notes
        </button>
      </form>
      {data.length ? (
        <div className="note-list">
          <h3>All Notes</h3>
          {data.map((note) => (
            <div key={note._id} className="note-item">
              <h4>{note.title}</h4>
              <p>{note.description}</p>
              <button
                className="note-delete-btn"
                onClick={ ()=>{ deleteNote(note._id)}}
              >
                {" "}
                <span role="img" aria-label="Delete">
                  🗑️
                </span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-notes-message">No notes present</p>
      )}
    </div>
  );
  // ... (rest of your component code)
}
export default Show;
