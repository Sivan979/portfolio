import Header from '../components/header';
import Styles from '../styles/home.module.css';
import profileImg from '../assets/images/profileimage.webp';
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
            Hoi, welkom op mijn pagina! Ik ben Sivan Hannan 21 jaar oud,
            een enthousiaste en gedreven student Software Developer aan het Deltion College in Zwolle.
            Programmeren vind ik enorm leuk en interessant,
            vooral het bouwen van interactieve websites en mobiele apps met HTML, CSS, JavaScript, React en React Native.
            Mijn doel is om constant te groeien en nieuwe technologieën en tools te ontdekken om mijn vaardigheden verder te ontwikkelen.
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

