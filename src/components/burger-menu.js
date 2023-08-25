'use client'
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavMenu } from "./nav-menu"
import { ThemeSwitch } from "./theme-switch"
import styles from './burger-menu.module.css'
const delay = (ms) => new Promise((r) => setTimeout(r, ms))

export function BurgerMenu() {
  const burgerMenuIcon = <FontAwesomeIcon icon={faBars} size='2xl' style={{color: "#f8a61a", }} />
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMouseOn, setIsMouseOn] = useState(false)

  const handleMouseEnteringBar = () => {
    setIsMouseOn(true)
  }

  const handleMouseLeavingBar = () => {
    setIsMouseOn(false)
  }

  const handleMouseEnteringBurger = () => {
    setIsMenuOpen(true)
    document.body.classList.add('swipeDown')
  }

  useEffect(() => {
    let isCurrent = true

    const forgivingHover = async () => {
      await delay(500)
      if(!isMouseOn && isCurrent) {
        setIsMenuOpen(false)
        document.body.classList.remove('swipeDown')
      }
    }
    forgivingHover()

    return() => {
      isCurrent = false
    }
  }, [isMouseOn])

  // console.log(`is mouse on:${isMouseOn}`);
  // console.log(`is menu open:${isMenuOpen}`);

  return(
    <div className={styles.navBarComplete}
      onMouseLeave={handleMouseLeavingBar}
      onMouseEnter={handleMouseEnteringBar}
    >
      <div
        onMouseEnter={handleMouseEnteringBurger}
      >
        {burgerMenuIcon}
      </div>
      {isMenuOpen && <NavMenu />}
      {isMenuOpen && <ThemeSwitch />}
    </div>
  )
}
