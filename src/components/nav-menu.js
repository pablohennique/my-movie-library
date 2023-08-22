import Link from 'next/link'
import styles from './nav-menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export function NavMenu() {
  const searchIcon = <FontAwesomeIcon icon={faSearch} style={{color: "#515e70", width: '20px', }} />

  return (
    <nav className={styles.navMenu}>
      <ul>
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
        <li className={styles.searchIcon}>
          <Link href='/search'>{searchIcon}</Link>
        </li>
      </ul>
    </nav>
  )
}
