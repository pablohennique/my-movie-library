'use client'

import styles from './theme-switch.module.css'

export function ThemeSwitch() {
  return (
    <button
      onClick={(event) => {
        if (document.body.classList.contains('dark')) {
          document.body.classList.remove('dark')
          event.currentTarget.innerHTML = 'Light Theme'
        } else {
          document.body.classList.add('dark')
          event.currentTarget.innerHTML = 'Dark Theme'
        }
        // document.body.classList.toggle('dark')
      }}
      className={styles.themeSwitch}
    >
      Switch Theme
    </button>
  )
}
