import React from 'react'
import Header from '../components/header';
import Styles from '../styles/portfolio.module.css';
import ProjectCarousel from '../components/ProjectCarousel';

import DandidoImg1 from '../assets/images/dandido/dandido1.png';
import DandidoImg2 from '../assets/images/dandido/dandido2.png';
import DandidoImg3 from '../assets/images/dandido/dandido3.png';
import DandidoImg4 from '../assets/images/dandido/dandido4.png';

import touchdown1 from "../assets/images/touchdown/touchdown1.png";
import touchdown2 from "../assets/images/touchdown/touchdown2.png";
import touchdown3 from "../assets/images/touchdown/touchdown3.png";
import touchdown4 from "../assets/images/touchdown/touchdown4.png";

import memory1 from "../assets/images/memory/memory1.png";
import memory2 from "../assets/images/memory/memory2.png";
import memory3 from "../assets/images/memory/memory3.png";
import memory4 from "../assets/images/memory/memory4.png";

import star1 from "../assets/images/stars/star1.jpeg";
import star2 from "../assets/images/stars/star2.jpeg";
import star3 from "../assets/images/stars/star3.jpeg";
import starVideo from "../assets/images/stars/starVideo.mp4";




const projects = [
  {
    title: "DanDido",
    images: [DandidoImg1, DandidoImg2, DandidoImg3, DandidoImg4],
    description: "A shoe app where you can shop for various brands of shoes in one place. it was developed using HTML, Javascript and CSS.",
    link: "https://sivan979.github.io/Dandido/"
  },
  ,
  {
    title: "Stars",
    images: [star1, star2, star3, starVideo ],
    description: "A movies app used with API developed with React Native.",
    link: "https://Sivan979.github.io/starss/"
  },
  {
    title: "Touchdown Game",
    images: [touchdown1,touchdown2,touchdown3,touchdown4],
    description: "a game where you can double or triple your money!",
    link: "https://sivan979.github.io/TouchDown-game/"
  },
  {
    title: "Memory Game",
    images: [memory1, memory2, memory3, memory4],
    description: "A fun memory card game developed using HTML, Javascript and CSS. it is a game where you have 11 lives to win the game before you lose.",
    link: "https://sivan979.github.io/memory-game/"
  }
];




const portfolio = () => {
  return (
    <div className={Styles.container}>
      <Header />

      <p className={Styles.topDescription}>My projects so far</p>

      <div className={Styles.productContainer}>
        {projects.map( (project) => (
          <div className={Styles.product}>
            <p className={Styles.title}>{project.title}</p>
            
            

            <ProjectCarousel images={project.images} />

            <p className={Styles.description}>{project.description}</p>
            <a className={Styles.link} href={project.link} target="_blank" rel="noopener noreferrer"> view project</a>
          </div>
        ))}
      </div>


    </div>
  )
}

export default portfolio