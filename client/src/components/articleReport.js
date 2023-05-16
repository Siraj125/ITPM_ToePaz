import React from 'react'
import { useEffect } from "react";
import { useState } from 'react';
import Axios from 'axios';
import "../css/articleReport.css"
function ArticleReport() {
    const[listOfArticles,setListOfArticles]=useState([])

    useEffect (()=>{
        Axios.get("http://localhost:3001/articles/getArticles").then((response)=>{
        setListOfArticles(response.data);  
        })
    },[])
  return (
    <div className="articleReport">
      {listOfArticles.map((Report) => {
        return (
          <table className="ArticleR_table">
            <tr>
              <th className="ArticleR_th">Report_ID</th>
              <th className="ArticleR_th">Title</th>
              <th className="ArticleR_th">TimeStamp</th>
            </tr>
            <tr>
              <td className="ArticleR_td">{Report._id}</td>
              <td className="ArticleR_td">{Report.title}</td>
              <td className="ArticleR_td">{Report.createdAt}</td>
            </tr>
          </table>
        );
      })}

    </div>
  );
}

export default ArticleReport