import React, { useState } from "react";

const CreateNote = (props) =>{

    const [expand, setexpand]=useState(false)
    const[note, setNote]= useState({
        title:'',
        content:'',
    })
    const InputEvent = (event) =>{
      
        const {name, value} = event.target;
        setNote((prevData) =>{
            return {
                ...prevData,
                [name]:value,
            }
        });
        console.log(note)
    };

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })
    }
    const expandIt= () =>{
        setexpand(true);
    }
    const btonormal= ()=>{
        setexpand(false);
    }

    return(
        <>
            <div className="main_note" >
                <div className="form">
                    {expand?
                    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>: null }
                    <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note... " onClick={expandIt} onDoubleClick={btonormal}/>
                   { expand?
                    <button onClick={addEvent} className="plus_sign"> ➕</button>: null}
                </div>
               
                
            </div>
        </>
    )
}
export default CreateNote;