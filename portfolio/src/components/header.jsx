import React from 'react'
import { Link } from 'react-router-dom'
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
          <Link to="/home" className={Styles.section}>Home</Link>
          <Link to="/portfolio" className={Styles.section}>Portfolio</Link>
          <Link to="/resume" className={Styles.section}>Resume</Link>
        </div>
      </div>
    </>
  )
}

export default header
