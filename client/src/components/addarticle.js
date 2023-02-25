import React from "react";
import { useState } from "react";
import Axios from 'axios';
import "../css/article.css"

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
        <div className="article_page">
            <form className="article_form" onSubmit={add}>
                <input type='text'
                    className="article_title"
                    placeholder="add title"
                    onChange={(event)=>{setTitle(event.target.value);

                    }}/>
                     <input type='text'
                    className="article_title"
                    placeholder="add image url"
                    onChange={(event)=>{setImage(event.target.value);

                    }}/>
                     <input type='text'
                     className="article_para"
                    placeholder="add paragraph"
                    onChange={(event)=>{setParagraph(event.target.value);

                    }}/>
                    <button className="addArticleButton" type="submit">submit</button>
            </form>
        </div>
    )
}
export default Addarticles;