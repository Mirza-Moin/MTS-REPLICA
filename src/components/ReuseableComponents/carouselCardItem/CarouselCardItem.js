import React from 'react'
import './carousel.scss'

function CarouselCardItem() {
  return (
    <div className="carousel-card-container">
        <div className="title">
            <p className='title-main'>1st <span>PHASE</span></p>
            <p className='title-sub'>UNLEASH THE MAGIC BERRY SYRUP</p>
        </div>
        <div className="description">
            <p>We introduce to the world our highly anticipated Meta Tiger NFT collection.Minting with the latest technology of ERC721A to provide the lowest gas fees.</p>
            <p>Our artists have created inspiring, unique digital artworks that, with just 5,555 available to mint, shall be incredibly exclusive.</p>
            <p>Featuring mesmerizing hand-drawn art and 200+ unique traits, show your love for the tiger in digital form by minting your very own Meta Tiger NFT.</p>
        </div>
    </div>
  )
}

export default CarouselCardItem