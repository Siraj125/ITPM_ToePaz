import React from "react";
import { useState } from "react";
import Axios from 'axios';

function Addarticles(){
    const[title,setTitle]=useState('')
    const[image,setImage]=useState('')
    const[paragraph,setParagraph]=useState('')

    const add = async(event)=>{
        event.preventDefault();
        Axios.post("")

        }
    
    return(
        <div>
            <form>
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
            </form>
        </div>
    )
}
export default Addarticles;