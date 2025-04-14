import React from 'react'
import Styles from '../styles/header.module.css';
import Dollar from '../assets/dollar-icon.png'

const header = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.leftContainer}>
          <img className={Styles.dollar} src={Dollar} alt="dollar" />
          <a className={Styles.name} href="">Sivan Hannan </a>
        </div>
      
        <div className={Styles.sectionContainer}>
          <a className={Styles.section} href="">Home</a>
          <a className={Styles.section} href="">Portfolio</a>
          <a className={Styles.section} href="">Resume</a>
        </div>
      </div>
    </>
  )
}

export default header
