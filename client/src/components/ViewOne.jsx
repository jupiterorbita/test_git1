import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const thisComponentStyle = {
    width: "60%",
    margin: "0 auto",
    textAlign: "left",
    backgroundColor: "rgb(255, 229, 153)",
    padding: "10px 20px",
    borderRadius: "10px"
}

const ViewOne = (props) => {

    // grab the variable from the url :id :var :whatever
    const { id } = useParams()
    console.log(id);

    const [thisNote, setThisNote] = useState({});


    useEffect(() => {
        axios.get("http://localhost:8000/api/notes/" + id)
            .then(res => {
                console.log(res.data);
                setThisNote(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div style={thisComponentStyle}>
            <h3>{thisNote.title}</h3>
            <p>{thisNote.content}</p>
            <p>{thisNote.isImportant ? "📌" : ""}</p>
        </div>
    )
}

export default ViewOne