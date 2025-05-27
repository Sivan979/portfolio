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
    description: "DanDido is een moderne webapplicatie waar je in één oogopslag de populairste schoenmerken kunt bekijken en direct kunt bestellen. Gemaakt met JavaScript, React, HTML en CSS voor een snelle én responsieve winkelervaring.",
    link: "https://sivan979.github.io/Dandido/"
  },
  ,
  {
    title: "Stars",
    images: [star1, star2, star3, starVideo ],
    description: "Stars is een mobiele app gebouwd met React Native en de TMDB API. Op de home-pagina vind je de populairste films van dit moment. In de zoek-tab kun je films op titel zoeken. Op de saved-tab beheer je al je opgeslagen films.",
  },
  {
    title: "Touchdown Game",
    images: [touchdown1,touchdown2,touchdown3,touchdown4],
    description: "TouchDown is een gokspel met drie vield­opties: Small, Medium en Big. Je kiest eerst je inzetbedrag. Elk veld heeft een vast aantal kolommen (bijvoorbeeld 5 voor Small, 8 voor Medium en 10 voor Big). In elke kolom zit precies één “guard” verstopt: raak je die, dan ben je je inzet kwijt. Vind je geen guard, dan schuif je door naar de volgende kolom en neemt je winst toe volgens de bijbehorende multiplier. Bereik je de endzone zonder een guard te raken, dan ontvang je de maximale uitbetaling! Gemaakt met JavaScript, HTML en CSS.",
    link: "https://sivan979.github.io/TouchDown-game/"
  },
  {
    title: "Memory Game",
    images: [memory1, memory2, memory3, memory4],
    description: "Memory Game is een kaart geheugenspel waarin je 11 levens hebt. Bij elke foutieve match verlies je één leven; is je leven op, dan verlies je. Vind je alle paren binnen je beschikbare levens, dan win je het spel! Gemaakt met HTML, JavaScript en CSS.",
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