import React from "react";
import { useState } from "react";
import Axios from 'axios';


function Addarticles(){
    const[title,setTitle]=useState('')
    const[image,setImage]=useState('')
    const[paragraph,setParagraph]=useState('')

    const add = async(event)=>{
        event.preventDefault();
        Axios.post('http://localhost:3001/articles/addArticles',{
            title :event.target[0].value,
            image :event.target[1].value,
            paragraph :event.target[2].value,
                 }).then((response)=>{
                alert("sdadsd");
            })
            console.log({title:title, image:image, paragraph:paragraph})

        }
        
    
    return(
        <div>
            <form onSubmit={add}>
                <input type='text'
                    placeholder="add title"
                    onChange={(event)=>{setTitle(event.target.value);

                    }}/>
                     <input type='text'
                  
                    placeholder="add image"
                    onChange={(event)=>{setImage(event.target.value);

                    }}/>
                     <input type='text'
                    placeholder="add paragraph"
                    onChange={(event)=>{setParagraph(event.target.value);

                    }}/>
                    <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Addarticles;