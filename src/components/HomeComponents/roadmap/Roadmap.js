import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCardItem from "../../ReuseableComponents/carouselCardItem/CarouselCardItem";

import "./roadmap.scss";



function Roadmap() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 550 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <main className="roadmap-container">
      <main className="roadmap">
        <div className="roadmap-header">
          <h1>ROADMAP</h1>
          <p>
            Join us from the first step in our roar-some adventure to educate
            the world about the plight of the tiger and support their vital
            preservation!
          </p>
        </div>
      </main>
      <div className="carousel-container">
      <Carousel className = "carousel" arrows={true} 
                responsive={responsive}
                >
        <div>
          <CarouselCardItem/>
        </div>
        <CarouselCardItem/>
        <CarouselCardItem/>
        <CarouselCardItem/>
        <CarouselCardItem/>
        <CarouselCardItem/>
        {/* <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div> */}
      </Carousel>
      </div>
      
    </main>
  );
}

export default Roadmap;
