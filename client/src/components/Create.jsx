import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState(false)

    const [errors, setErrors] = useState([]);


    const createNote = (e) => {
        e.preventDefault();
        // console.log(title, content, isImportant);

        const newNote = {
            title: title,
            content,
            isImportant
        }
        // POST to the db, with the obj
        axios.post("http://localhost:8000/api/notes", newNote)
            .then(res => {
                console.log(res.data);
                console.log("SUCCESS CLIENT");
                navigate("/")
            })
            .catch(err => {
                console.log("❌ ERROR CLIENT")
                console.log(err.response.data)

                // TODO: wed
                // // alternate way
                // const {errors} = err.response.data;
                // const messages = Object.keys(errors).map( error => errors[error].message)
                // console.log(messages);
                // setErrors(messages);
                
                // // PLATFORM
                // // https://login.codingdojo.com/m/130/6667/48297
                // // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // // const errorArr = []; // Define a temp error array to push the messages in
                // // // const keysErr = Object.keys(errorResponse);
                // // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                // //     errorArr.push(errorResponse[key].message)
                // // }
                // // // Set Errors
                // // setErrors(errorArr);
            })
    }

    return (
        <div>
            <p>
                {JSON.stringify(title)} <br />
                {JSON.stringify(content)} <br />
                {JSON.stringify(isImportant)} <br />
            </p>
            <h3>Form</h3>
            <p>
                ERRORS : {JSON.stringify(errors)}
            </p>
            <>
                {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
            </>
            <form onSubmit={createNote}>
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

export default Create