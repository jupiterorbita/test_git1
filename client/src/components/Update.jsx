import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Update = (props) => {

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setContent(res.data.content);
                setIsImportant(res.data.isImportant);
            })
            .catch(err => console.log(err))
    }, [id])

    // UPDATE
    const updateNote = (e) => {
        e.preventDefault();
        console.log(title, content, isImportant);

        const newNote = {
            title: title,
            content,
            isImportant
        }
        // POST to the db, with the obj
        axios.put(`http://localhost:8000/api/notes/${id}`, newNote )
            .then( res => {
                console.log(res.data);
                navigate("/")
            })
            .catch(err => {
                console.log("❌:", err)
            })
    }

    return (
        <div>
            <h3>UPDATE</h3>
            <p>
                {/* {JSON.stringify(title)} <br />
                {JSON.stringify(content)} <br />
                {JSON.stringify(isImportant)} <br /> */}
            </p>

            <form onSubmit={updateNote}>
                title:
                <input onChange={e => setTitle(e.target.value)} value={title} /> <br />
                content:
                <input onChange={e => setContent(e.target.value)} value={content} /> <br />

                <input type="checkbox" onChange={e => setIsImportant(e.target.checked)} checked={isImportant} /> is this important?<br />

                <button>Create</button>
            </form>
        </div>
    )
}

export default Update