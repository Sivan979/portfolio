import React from 'react'
import Header from '../components/header';
import Styles from '../styles/portfolio.module.css';


const projects = [
  {
    title: "DanDido",
    description: "A shoe app where you get only the discounted shoes",
    link: "https://sivan979.github.io/Dandido/"
  },
  {
    title: "Memory Game",
    description: "A fun memory card game built with HTML, CSS, and JavaScript.",
    link: "https://github.com/@sivan979/memory-game"
  },
  {
    title: "Stars",
    description: "A React-based starssss with local storage.",
    link: "https://Sivan979.github.io/starss/"
  }
];

const portfolio = () => {
  return (
    <div className={Styles.container}>
      <Header />

      <h2>my projects</h2>
      <div>
        {projects.map( (project, index) => (
          <div>
            <p>{project.title}</p>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer"> view project</a>
          </div>
        ))}
      </div>

    </div>
  )
}

export default portfolio