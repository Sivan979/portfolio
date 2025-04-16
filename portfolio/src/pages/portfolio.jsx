import React from 'react'
import Header from '../components/header';
import Styles from '../styles/portfolio.module.css';
import DandidoImg1 from '../assets/images/dandido/dandido1.png';
import DandidoImg2 from '../assets/images/dandido/dandido2.png';
import DandidoImg3 from '../assets/images/dandido/dandido3.png';
import DandidoImg4 from '../assets/images/dandido/dandido4.png';


const projects = [
  {
    title: "DanDido",
    images: [DandidoImg1, DandidoImg2, DandidoImg3, DandidoImg4],
    description: "A shoe app where you can shop for various brands of shoes in one place. it was developed using HTML, Javascript and CSS.",
    link: "https://sivan979.github.io/Dandido/"
  },
  {
    title: "Memory Game",
    images: [DandidoImg1, DandidoImg2, DandidoImg3, DandidoImg4],
    description: "A fun memory card game built with HTML, CSS, and JavaScript.",
    link: "https://github.com/@sivan979/memory-game"
  },
  {
    title: "Stars",
    images: [DandidoImg1, DandidoImg2, DandidoImg3, DandidoImg4],
    description: "A movies app used with API developed with React Native.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddd",
    link: "https://Sivan979.github.io/starss/"
  },
  {
    title: "Touchdown Game",
    images: [DandidoImg1, DandidoImg2, DandidoImg3, DandidoImg4],
    description: "a game where you can double or triple your money!",
    link: "https://Sivan979.github.io/starss/"
  }
];

const portfolio = () => {
  return (
    <div className={Styles.container}>
      <Header />

      <p className={Styles.topDescription}>my projects so far</p>
      <div className={Styles.productContainer}>
        {projects.map( (project, index) => (
          <div className={Styles.product}>
            <p className={Styles.title}>{project.title}</p>
            <div className={Styles.imgContainer}>
              {project.images.map((img, index) =>(
                <img key={index} className={Styles.img} src={img} alt="product image" />
              ))}
            </div>
            <p className={Styles.description}>{project.description}</p>
            <a className={Styles.link} href={project.link} target="_blank" rel="noopener noreferrer"> view project</a>
          </div>
        ))}
      </div>

    </div>
  )
}

export default portfolio