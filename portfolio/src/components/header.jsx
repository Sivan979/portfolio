import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../styles/header.module.css';
import Dollar from '../assets/icons/dollar-icon.png'
import { NavLink } from 'react-router-dom';


const header = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.leftContainer}>
          <img className={Styles.dollar} src={Dollar} alt="dollar" />
          <a className={Styles.name} href="">Sivan Hannan </a>
        </div>
      
        <nav className={Styles.sectionContainer}>
          <NavLink  to="/home" className={({ isActive }) => isActive ? `${Styles.section} ${Styles.active}` : `${Styles.section}`}>Home</NavLink>
          <NavLink  to="/portfolio" className={({ isActive }) => isActive ? `${Styles.section} ${Styles.active}` : `${Styles.section}`}>Portfolio</NavLink>
          <NavLink  to="/resume" className={({ isActive }) => isActive ? `${Styles.section} ${Styles.active}` : `${Styles.section}`}>Resume</NavLink>
        </nav>
      </div>
    </>
  )
}

export default header
