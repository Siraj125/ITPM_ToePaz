import React, { useEffect, useState } from 'react'
import HeroSlider,{Slide} from "hero-slider";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"

import "../css/home.css"
import  Axios  from 'axios';


function Home  ()  {
    const image1 =img1;
    const image2 =img2;
    const image3= img3;
    const image4= img4;
    const image5= img5;
    const image6= img6;

    const [listOfArticles,setListOfArticles]=useState([])
 
    useEffect (()=>{
        Axios.get("http://localhost:3001/articles/getArticles").then((response)=>{
        setListOfArticles(response.data);  
        })
    })

   

  return (
    <div className='homepage_css'>
        <h1>Join us in saving the world</h1>
        <div className='homepage_slider'>
            <HeroSlider
                height={"600px"}
                autoplay    
                controller={{
                    initialSlide: 1,
                    slidingDuration: 50,
                    slidingDelay: 50,
                    onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                    onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),   onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
                }}
                    >
                <Slide 
                    background={{
                        backgroundImageSrc :image1,
                        backgroundAttachment: "fixed"
                    }}/>
                    <Slide 
                    background={{
                        backgroundImageSrc :image2,
                        backgroundAttachment: "fixed"
                    }}/>
                    <Slide 
                    background={{
                        backgroundImageSrc :image3,
                        backgroundAttachment: "fixed"
                    }}/>
                     <Slide 
                    background={{
                        backgroundImageSrc :image4,
                        backgroundAttachment: "fixed"
                    }}/>
                     <Slide 
                    background={{
                        backgroundImageSrc :image5,
                        backgroundAttachment: "fixed"
                    }}/>
                     <Slide 
                    background={{
                        backgroundImageSrc :image6,
                        backgroundAttachment: "fixed"
                    }}/>
            </HeroSlider>
        </div>
        <div className='homepage_components'>
           { listOfArticles.map((art)=>{
            return<div className='home_component_wrapper' key={art._id}>
                    <img className='home_component_wrapper_img' src={art.image} alt={'blah'} />
                    <div className='home_component_wrapper_text'>
                            <div className='home_component_title'> {art.title}</div>
                            <div className='home_component_para'> {art.paragraph} </div>
                    </div>
                  </div>
           })}
        </div>
    </div>
  )
}

export default Home;