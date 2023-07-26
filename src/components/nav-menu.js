import Link from 'next/link'
import styles from './nav-menu.module.css'

export function NavMenu() {

  return (
    <ul className={`${styles.navBar}`}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href='/movies'>Movies</Link>
      </li>
      <li>
        <Link href='/people'>People</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  )
}
