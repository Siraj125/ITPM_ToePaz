import React from 'react'
import HeroSlider,{Slide} from "hero-slider";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import "../css/home.css"

function Home  ()  {
    const image1 =img1;
    const image2 =img2;
    const image3= img3;
 
       
   

  return (
    <div className='homepage_css'>
        <h1>home</h1>
        <div className='homepage_slider'>
            <HeroSlider
                height={"500px"}
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
            </HeroSlider>
        </div>
        <div className='homepage_components'>
            components  
        </div>
    </div>
  )
}

export default Home;