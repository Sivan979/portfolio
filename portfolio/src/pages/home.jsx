import React from 'react';
import Header from '../components/header';
import Styles from '../styles/home.module.css';


const home = () => {
  return (
    <div className={Styles.container}>
      <Header />
      <div className={Styles.homeContainer}>
        <div className={Styles.leftSection}>
          <img src="" alt="profile image" />
        </div>

        <div className={Styles.rightSection}>
          <h1>Sivan Hannan</h1>
          <p className={Styles.intro}>
            hi my name is sivan hannan and i am 21 years old male.
            i do software developer at Deltion College in Zwolle and what i like to work with
            the most is JavaScript with React or React Native, this was a short intro about me.
          </p>
        </div>
      </div>
    </div>
  )
}

export default home

