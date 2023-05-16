import React from 'react'
import { useEffect } from "react";
import { useState } from 'react';
import Axios from 'axios';
import "../css/articleReport.css"
// np
function ArticleReport() {
    const[listOfArticles,setListOfArticles]=useState([])


    // const generateReport = async () => {
    //   const response = await Axios.get('http://localhost:3001/articles/getArticles');
    //   const articles = response.data;
  
    //   const doc = new jsPDF();
  
    //   articles.forEach((Report) => {
    //     doc.addPage();
    //     doc.text('Report ID: ' + Report._id, 10, 10);
    //     doc.text('Title: ' + Report.title, 10, 20);
    //     doc.text('Timestamp: ' + Report.createdAt, 10, 30);
    //   });
  
    //   // Save the PDF report
    //   doc.save('report.pdf');
      
    // };
  

    useEffect (()=>{
        Axios.get("http://localhost:3001/articles/getArticles").then((response)=>{
        setListOfArticles(response.data);  
        })
    },[])
  return (
    <div className="articleReport">
          {/* {listOfArticles.length > 0 ? (
        <button onClick={generateReport}>Generate Report</button>
      ) : (
        <p>Loading articles...</p>
      )} */}
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