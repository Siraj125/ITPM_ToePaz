import React,{useEffect, useState} from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom';
// import axios from 'axios';


export default function UpdateArticle  () {
    const[title,setTitle]=useState('')
    const[image,setImage]=useState('')
    const[paragraph,setParagraph]=useState('')
    const{id}=useParams();
    const[articles,setArticles]=useState([])

    // const routeParams= useParams();

//    useEffect(()=>{
//         setID();
//    },[])

//    console.log(id)
   
//    const getItemId = async ()=>{
//     console.warn(routeParams)

//    }
console.log(id,'blah');
useEffect (()=>{
    // const id= props.match.params.id
    
    Axios.get(`http://localhost:3001/articles/getArticles`).then((response)=>{
    setArticles(response.data);  
    }).catch(err=>console.error(err))
    
},[])
    const updateArticle = async (e) =>{
        e.preventDefault();
        // console.log(params)
        Axios.post(`http://localhost:3001/articles/updateArticle/${id}`,{
            newTitle : title,
            newImage : image,
            newPara : paragraph,

        }).then((response)=>{alert("update")})
        .catch((e)=>{console.error(e)});
        console.log({newTitle:title, newImage:image, newPara:paragraph})
    }
    // const load =async()=>{
    //     const result=await axios.get(`http://localhost:3001/articles/updateArticle/${id}`)
    // }
   

  return (
    <div>
        <form onSubmit={updateArticle}>
            <input type="text"
                // placeholder="images"
                required="required"
                className="article_image_update_input"
                placeholder='image'
                onInput={(e)=>{setImage(e.target.value)}}
                value={image}
                />
            <input type="text"
                // placeholder="title"
                className="article_update_input"
                required="required"
                placeholder='title'
                onInput={(e)=>{setTitle(e.target.value)}}
                value={title}
                />
            <input type="text" 
                // placeholder="para" 
                required="required"
                className="article_update_input"
                placeholder='paragraph'
                onInput={(e)=>{setParagraph(e.target.value)}}
                value={paragraph}
                />
                <button type='submit'>update</button>
            </form>
    </div>
  )
}

