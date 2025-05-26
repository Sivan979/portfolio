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
    description: "Een schoenen-app waarmee je verschillende schoenenmerken op één plek kunt shoppen. De app is ontwikkeld met behulp van HTML, Javascript en CSS.",
    link: "https://sivan979.github.io/Dandido/"
  },
  ,
  {
    title: "Stars",
    images: [star1, star2, star3, starVideo ],
    description: "Een film-app die wordt gebruikt met een API ontwikkeld met React Native.",
  },
  {
    title: "Touchdown Game",
    images: [touchdown1,touchdown2,touchdown3,touchdown4],
    description: "Een gokspel waarbij je je geld kunt verdrievoudigen of al je geld kunt verliezen",
    link: "https://sivan979.github.io/TouchDown-game/"
  },
  {
    title: "Memory Game",
    images: [memory1, memory2, memory3, memory4],
    description: "Een leuk geheugenkaartspel ontwikkeld met behulp van HTML, Javascript en CSS. Het is een spel waarbij je 11 levens hebt om te winnen voordat je verliest.",
    link: "https://sivan979.github.io/memory-game/"
  }
];

const portfolio = () => {
  return (
    <div className={Styles.container}>
      <Header />

      <p className={Styles.topDescription}>Mijn Projecten</p>

      <div className={Styles.productContainer}>
        {projects.map( (project, idx) => (
          <div className={Styles.product}>
            <p className={Styles.title}>{project.title}</p>
            
            <ProjectCarousel images={project.images} />

            <p className={Styles.description}>{project.description}</p>
            {project.link && (
              <>
                <a className={Styles.link} href={project.link} target="_blank" rel="noopener noreferrer"> Bekijk project</a>
              </>
            )}
            {idx < projects.length - 1 && (
              <hr className={Styles.divider} />
            )}
          </div>
        ))}
      </div>


    </div>
  )
}

export default portfolio