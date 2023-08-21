import { NavMenu } from "./nav-menu"
import { ThemeSwitch } from "./theme-switch"
import styles from './nav-menu-with-lights.module.css'

export function NavMenuWithLight() {
  return(
    <div className={styles.dynamicNavBar}>
      <NavMenu />
      <ThemeSwitch />
  </div>
  )
}
