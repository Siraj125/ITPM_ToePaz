import React from "react";
import { useState } from "react";
import Axios from 'axios';

function DonateTrees(){
    const[name,setName]=useState('')
    const[trees,setTrees]=useState('')
    const[comment,setComment]=useState('')

    const add = async(event)=>{
        event.preventDefault();
        Axios.post('http://localhost:3001/donation/addDonateTrees',{
            name :event.target[0].value,
            trees :event.target[1].value,
            comment :event.target[2].value,
                 }).then((response)=>{
                alert("Ur a good person");
            })
            console.log({name:name, trees:trees, comment:comment})

        }
        
    
    return(
        <div className="donate_page">
            <form className="donate_form" onSubmit={add}>
                <input type='text'
                    className="donate_name"
                    placeholder="Name"
                    onChange={(event)=>{setName(event.target.value);

                    }}/>
                     <input type='number'
                    className="donate_number"
                    placeholder="Number of new trees"
                    onChange={(event)=>{setTrees(event.target.value);

                    }}/>
                     <input type='text'
                     className="donate_comment"
                    placeholder="add a comment"
                    onChange={(event)=>{setComment(event.target.value);

                    }}/>
                    <button className="donateTreeButton" type="submit">DONATE!</button>
            </form>
        </div>
    )
}
export default DonateTrees;