'use client'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavMenuWithLight } from './nav-menu-with-light'
import styles from './burger-menu.module.css'

export function BurgerMenu() {
  const burgerMenu = <FontAwesomeIcon icon={faBars} size='2xl' style={{color: "#F9B339", }} />
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleHover = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // document.body.classList.toggle('navMenuHidden')

  return(
    <div
      className={styles.navBarComplete}
      onMouseEnter={handleHover} onMouseLeave={handleHover}
    >
      {burgerMenu}
      {isMenuOpen && <NavMenuWithLight />}
    </div>
  )
}
