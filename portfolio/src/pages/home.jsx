import Header from '../components/header';
import Styles from '../styles/home.module.css';
import profileImg from '../assets/images/profileimage.jpg';
import css from '../assets/icons/css.png';
import html from '../assets/icons/html.png';
import javascript from '../assets/icons/java-script.png';
import react from '../assets/icons/react.png';
import reactNative from '../assets/icons/react-native.png';


const home = () => {
  return (
    <div className={Styles.container}>

      <Header />

      <div className={Styles.homeContainer}>
        <div className={Styles.leftSection}>
          <img className={Styles.profileImg} src={profileImg} alt="profile image" />
        </div>

        <div className={Styles.rightSection}>
          <h1>Sivan Hannan</h1>
          <p className={Styles.intro}>
            Hoi en welkom op mijn pagina! Ik ben Sivan Hannan, 21 jaar en ik volg de opleiding Software Developer aan het Deltion College in Zwolle. 
            Ik ben leergierig, gedreven en enthousiast over het bouwen van interactieve websites en mobiele apps met HTML, CSS, JavaScript, React en React Native. 
            Mijn passie ligt in het ontdekken van nieuwe technologieën en tools om mijn vaardigheden steeds verder te verbeteren en te groeien als software developer.
          </p>
        </div>
      </div>

      <div className={Styles.iconContainer}>
        <img className={Styles.icons} src={html} alt="html" />
        <img className={Styles.icons} src={css} alt="css" />
        <img className={Styles.icons} src={javascript} alt="javascript" />
        <img className={Styles.icons} src={react} alt="react" />
        <img className={Styles.icons} src={reactNative} alt="react native" />
      </div>

    </div>
  )
}

export default home

