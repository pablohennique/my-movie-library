'use client'

import Link from 'next/link'
import styles from './nav-menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export function NavMenu() {
  const searchIcon = <FontAwesomeIcon icon={faSearch} style={{color: "#636766", width: '20px'}} />

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className={styles.container}>
      <nav className={styles.navMenu}>
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={`${styles.navbarLinks} ${isMenuOpen ? styles.open : ''}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href='/movies'>Movies</Link>
          </li>
          <li className='hidden'>
            <Link href='/people'>People</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href='/search'>{searchIcon}</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
