import React,{useEffect, useState} from 'react'
import Axios from 'axios';
import { useParams , useNavigate} from 'react-router-dom';
// import axios from 'axios';
import "../css/articleUpdate.css"

export default function UpdateArticle  () {
    const[title,setTitle]=useState('')
    const[image,setImage]=useState('')
    const[paragraph,setParagraph]=useState('')
    const{id}=useParams();
    const[articles,setArticles]=useState([])
    const navigate = useNavigate();
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
console.log(articles,"just  to get a warning out")
    // const updateArticle = async (e) =>{
    //     e.preventDefault();
    //     // console.log(params)
    //     Axios.post(`http://localhost:3001/articles/updateArticle/${id}`,{
    //         newTitle : title,
    //         newImage : image,
    //         newPara : paragraph,

    //     }).then((response)=>{alert("update")})
    //     .catch((e)=>{console.error(e)});
    //     console.log({newTitle:title, newImage:image, newPara:paragraph})

    //     navigate("/articles");
    // }

    const updateArticle = async (e) => {
        e.preventDefault();
        const shouldUpdate = window.confirm("Are you sure you want to update this account?");
        if(shouldUpdate){
            const updatedFields = {};
        
            if (title) {
            updatedFields.newTitle = title;
            }
        
            if (image) {
            updatedFields.newImage = image;
            }
        
            if (paragraph) {
            updatedFields.newPara = paragraph;
            }
        
            if (Object.keys(updatedFields).length === 0) {
            alert('No fields to update');
            return;
            }
        
            Axios.post(`http://localhost:3001/articles/updateArticle/${id}`, updatedFields)
            .then((response) => {
                alert('Update successful');
                navigate('/articles');
            })
            .catch((error) => {
                console.error(error);
                alert('Error updating article');
            });
        }
      };
      

    // const load =async()=>{
    //     const result=await axios.get(`http://localhost:3001/articles/updateArticle/${id}`)
    // }
   

  return (
    <div className='updateArticles'>
        <form className='updateArticlesForm' onSubmit={updateArticle}>
            <input type="text"
                // placeholder="images"
                // required="required"
                className="article_image_update_input"
                placeholder='image'
                onInput={(e)=>{setImage(e.target.value)}}
                value={image}
                />
            <input type="text"
                // placeholder="title"
                className="article_update_input"
                // required="required"
                placeholder='title'
                onInput={(e)=>{setTitle(e.target.value)}}
                value={title}
                />
            <input type="text" 
                // placeholder="para" 
                // required="required"
                className="article_update_paragraph"
                placeholder='paragraph'
                onInput={(e)=>{setParagraph(e.target.value)}}
                value={paragraph}
                />
                <button className="articleUpdateButton" type='submit'>update</button>
            </form>
    </div>
  )
}

