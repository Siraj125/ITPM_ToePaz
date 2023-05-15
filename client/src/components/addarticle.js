import React from "react";
import { useState,useEffect } from "react";
import Axios from 'axios';
import "../css/article.css"
import "../css/home.css"
import { Link } from "react-router-dom";
// import UpdateArticle from "./updateArticle";
// import { useParams } from "react-router-dom";

function Addarticles(props){
    const[title,setTitle]=useState('')
    const[image,setImage]=useState('')
    const[paragraph,setParagraph]=useState('')
    const[listOfArticles,setListOfArticles]=useState([])

    const addArti = async(event)=>{
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
        
        // function Update(stuff){
            // const data=[stuff._id,
            //     stuff.title,
            //     stuff.image,
            //     stuff.paragraph]
    
        //     console.log(stuff)
        // }
    //     const updateArticle = async () =>{
    //     Axios.post("http://localhost:3001/articles/updateArticle",{
    //         newTitle : title,
    //         newImage : image,
    //         newPara : paragraph,

    //     }).then((response)=>{alert('update')})
    //     .catch((e)=>{console.error(e)});
    // }
   
     
    useEffect (()=>{
        Axios.get("http://localhost:3001/articles/getArticles").then((response)=>{
        setListOfArticles(response.data);  
        })
    },[])

    const deleteArticle = (id) => {
        console.log(id);
        Axios.delete(`http://localhost:3001/articles/deleteArticle/${id}`)
          .then((response) => {
            console.log('Article deleted:', response.data);
            alert('Article deleted');
            // Update the list of articles by filtering out the deleted article
            setListOfArticles((prevList) => prevList.filter((article) => article._id !== id));
          })
          .catch((error) => {
            console.error('Error deleting article:', error);
          });
      };
      
    
    return(
        <div className="article_page">
            <div className="addArticle">
                <form className="article_form" onSubmit={addArti}>
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
            <div className='article_components'>
                { listOfArticles.map((art)=>{
                        
                    return<div className='article_component_wrapper' key={art._id}>
                                <div className='article_component_wrapper_img'>
                                    <img className="article_image" src={art.image} alt={'blah'} />
                                    {/* <input type="text"
                                     placeholder="images"
                                     required="required"
                                      className="article_image_update_input"
                                      onInput={(e)=>{setImage(e.target.value)}}
                                      value={image}/> */}
                                </div>
                                <div className='article_component_wrapper_text'>
                                    <div className='article_component_title'> {art.title}
                                        {/* <input type="text"
                                         placeholder="title"
                                          className="article_update_input"
                                          required="required"
                                          onInput={(e)=>{setTitle(e.target.value)}}
                                          value={title}/> */}
                                    </div>
                                    <div className='article_component_para'> {art.paragraph}   
                                        {/* <input type="text" 
                                         placeholder="para" 
                                         required="required"
                                         className="article_update_input"
                                         onInput={(e)=>{setParagraph(e.target.value)}}
                                         value={paragraph}/> */}
                                    </div>
                                </div>
                            <div className="article_buttons">
                                {/* <button onClick={updateArticle} className="article_button_update">update</button> */}
                                <Link 
                                // to="/updateArticle"  
                                to={`/updateArticle/${art._id}`}
                                // onClick={()=>Update(art)}
                                className="article_button_update" > update</Link>
                                              <button onClick={() => deleteArticle(art._id)} className="article_button_delete">Delete</button>

                                </div>
                            </div>
                })}
            </div>
        </div>
    )
}
export default Addarticles;