import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import css from module
import ourStyle from "./Main.module.css";
import { Link } from 'react-router-dom';

const Main = (props) => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes")
            .then(res => {
                console.log(res.data);
                setNotes(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    // DELETE
    const deleteNote = (deleteId) => {
        console.log(deleteId);

        if (window.confirm("really?")) {

            // make a request to the DB to delete
            axios.delete("http://localhost:8000/api/notes/" + deleteId)
            .then(res => {
                console.log(res.data);
                console.log("SUCCESS DELETE");
                
                // remove from the DOM after a successful delete
                setNotes(notes.filter((note) => note._id !== deleteId))
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <h3>All notes</h3>
            {/* {JSON.stringify(notes)} */}

            {
                notes.map((note, idx) => {
                    return (
                        <div key={note._id} className={ourStyle.note}>
                            <h5>
                                {note.isImportant ? "📌" : ""} -
                                <Link to={"/notes/" + note._id}>
                                    {note.title}
                                </Link>

                            </h5>
                            <p>{note.content}</p>
                            created at: {note.createdAt} <br />

                            <button><Link to={"/notes/update/" + note._id}>edit</Link></button>
                            <button onClick={() => deleteNote(note._id)}>delete</button>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main