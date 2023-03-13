import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css'
import Button from '../../ReuseableComponents/button/Button'
import './about.scss'

function About() {
  return (
    <main className="about">
      <div className="left">
        <div className="box"></div>
        <AnimationOnScroll animateIn="animate__pulse"  
        >
        <div className="box"></div>
        </AnimationOnScroll>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="right">
        <h1>META TIGERS</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ullam nobis totam. Quidem delectus consequuntur ipsam labore ratione dignissimos vero, nostrum, culpa id vitae quisquam laborum excepturi et in! Optio!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio, at fugiat fuga quia vitae alias suscipit maxime aliquam inventore quis mollitia ipsum placeat facilis, eum officiis optio adipisci. Et.</p>
        <p>we live in Pakistan. we love Pakistan...</p>
       <Button title="BUTTON TEXT"/>
      </div>
    </main>
  )
}

export default About