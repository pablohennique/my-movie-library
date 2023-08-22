'use client'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavMenu } from "./nav-menu"
import { ThemeSwitch } from "./theme-switch"
import styles from './burger-menu.module.css'

export function BurgerMenu() {
  const burgerMenuIcon = <FontAwesomeIcon icon={faBars} size='2xl' style={{color: "#f8a61a", }} />
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuShown = () => {
    setIsMenuOpen(true)
    document.body.classList.add('swipeDown')
  }
  const menuHidden = () => {
    setIsMenuOpen(false)
    document.body.classList.remove('swipeDown')
  }

  return(
    <div className={styles.navBarComplete} onMouseLeave={menuHidden}>
      <div onMouseEnter={menuShown} >
        {burgerMenuIcon}
      </div>
      {isMenuOpen && <NavMenu />}
      {isMenuOpen && <ThemeSwitch />}
    </div>
  )
}
