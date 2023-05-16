import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import"../css/articlePage.css"

function ArticlePage() {
  const { id } = useParams();
  const [listOfArticles, setListOfArticles] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/articles/getArticles/${id}`)
      .then((response) => {
        setListOfArticles(response.data);
        console.log(listOfArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="articlePage">
      
      {/* Render the data */}
      {[listOfArticles].map((article) => (
        <div className="Articlecontent" key={article._id}>
          <div className="articlepageImagecontainer">
            <img className="articlepageImage" src={article.image} alt="images" />
          </div>
          <div className="articlepageDetails">
            <h2 className="articlepageTitle">{article.title}</h2>
            <p className="articlepagepara">{article.paragraph}</p>
          </div>

          {/* Render other properties of the article as needed */}
        </div>
      ))}
    </div>
  );
}

export default ArticlePage;
