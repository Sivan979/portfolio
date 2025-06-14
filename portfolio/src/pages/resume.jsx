import Styles from '../styles/resume.module.css';
import Header from '../components/header.jsx';
import email from '../assets/icons/email.png';
import phone from '../assets/icons/telephone.png';
import profileImg from '../assets/images/profileimage.jpg';



const resume = () => {
  return (
    <div className={Styles.container}>
      <Header />
      <div className={Styles.infoContainer}>

        <div className={Styles.leftSection}>
          <div className={Styles.imgContainer}>
            <img className={Styles.profileImg} src={profileImg} alt="profile image" />
          </div>

          <div className={Styles.contactContainer}>
            <p className={Styles.sectionTxt}>contact</p>
            <div className={Styles.contactInfoContainer}>
              <div className={Styles.phoneContainer}>
                <img className={Styles.icons} src={phone} alt="phone" />
                <p>0642128717</p>
              </div>
              <div className={Styles.emailContainer}>
                <img className={Styles.icons} src={email} alt="email" />
                <p>Sivanhannan7@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={Styles.skillsContainer}>
            <p className={Styles.sectionTxt}>Vaardigheden</p>
            <ul className={Styles.list}>
              <li>Teamwerk</li>
              <li>Timemanagement</li>
              <li>Effectieve communicatie</li>
              <li>Kritisch denken</li>
              <li>Probleemoplosser</li>
            </ul>
          </div>

          <div className={Styles.languagesContainer}>
            <p className={Styles.sectionTxt}>Talen</p>
            <ul className={Styles.list}>
              <li>Nederlands (B2)</li>
              <li>Engels (B1–B2)</li>
              <li>Koerdisch (moedertaal)</li>
              <li>Arabisch (vloeiend)</li>
            </ul>
          </div>
    
        </div>


        <div className={Styles.rightSection}>

          <div className={Styles.nameContainer}>
            <p className={Styles.name}>Sivan Hannan</p>
            <p className={Styles.job}>Software Developer</p>
          </div>

          <div className={Styles.profileContainer}>
            <p className={Styles.rightSectionTxt}>Profiel</p>
            <p className={Styles.text}>
              Mijn naam is Sivan Hannan, ik ben 21 jaar oud en volg momenteel de opleiding <strong>Software Developer</strong> op MBO niveau 4 aan het Deltion College in Zwolle. 
              Eerder heb ik de opleiding Medewerker ICT (MBO niveau 2) succesvol afgerond,
              eveneens aan het Deltion College.
              Tijdens deze opleiding heb ik 800 uur stage gelopen als servicedeskmedewerker bij de ICT-afdeling van het Deltion College.
              Op dit moment werk ik met HTML, CSS, JavaScript, React en React Native.
              Ik ben leergierig en kijk ernaar uit om nieuwe frameworks en bibliotheken te leren kennen en mezelf verder te ontwikkelen als software developer.
            </p>
          </div>

          <div className={Styles.educationContainer}>
            <p className={Styles.rightSectionTxt}>Onderwijs</p>

            <div className={Styles.educationSectionContainer}>
              <div className={Styles.sectionTitleContainer}>
                <p className={Styles.title}>Software Developer</p>
                <p className={Styles.timeline}>2024 tot heden</p>
              </div>
              <p className={Styles.text}>
                Ik volg de opleiding Software Developer, waar ik leer werken met talen als HTML, CSS en JavaScript en frameworks zoals React en React Native. 
                In mijn projecten bouw ik zelf de onderdelen van een website of app en programmeer ik de bijbehorende logica.
              </p>
            </div>

            <div className={Styles.educationSectionContainer}>
              <div className={Styles.sectionTitleContainer}>
                <p className={Styles.title}>ICT Medewerker</p>
                <p className={Styles.timeline}>2022 &ndash; 2024</p>
              </div>
              <p className={Styles.text}>
                Tijdens mijn 800 uur durende stage als servicedeskmedewerker bij de ICT-afdeling beheerde ik gebruikersaccounts, 
                loste ik hardware- en softwareproblemen op en documenteerde ik de supportprocessen.
              </p>
            </div>

            <div className={Styles.educationSectionContainer}>
              <div className={Styles.sectionTitleContainer}>
                <p className={Styles.title}>Voorbrieding jaar VAVO</p>
                <p className={Styles.timeline}>2020 &ndash; 2021</p>
              </div>
              <p className={Styles.text}>
                Bij Windesheim in Zwolle heb ik een intensief taal- en studievaardighedenprogramma gevolgd ter voorbereiding op vervolgopleidingen. 
                Hierbij lag de nadruk op studieplanning en het vergroten van mijn beheersing van de Nederlandse en Engelse taal.
              </p>
            </div>

            <div className={Styles.educationSectionContainer}>
              <div className={Styles.sectionTitleContainer}>
                <p className={Styles.title}>Taalschool</p>
                <p className={Styles.timeline}>2019 &ndash; 2020 (augustus)</p>
              </div>
              <p className={Styles.text}>
                Ik heb een intensieve taalcursus Nederlands gevolgd, van niveau A1 tot B2, om vlot te kunnen functioneren in studie en werk.
                Dit heb ik afgerond met een B2-certificaat en goede resultaten.
              </p>
            </div>
    
          </div>

          <div className={Styles.workContainer}>
            <p className={Styles.rightSectionTxt}>Werk</p>
            <p className={Styles.text}>
              Tijdens mijn stage van zes maanden bij het Deltion College heb ik verschillende taken uitgevoerd.
              De eerste vijf maanden werkte ik vooral met het systeem Topdesk,
              waar ik meldingen aannam en klanten telefonisch of via het systeem hielp.
              Soms ging ik persoonlijk naar klanten toe om problemen op te lossen,
              zoals computers die niet wilden opstarten. Daarna werkte ik nog een maand aan de balie,
              waar ik direct vragen en problemen van klanten beantwoordde.
            </p>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default resume