'use client'
// import { useEffect, useState } from 'react'
import { useLocalStorageState } from '../lib/hooks'
import styles from './theme-switch.module.css'

export function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorageState('theme', 'light')

  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
      className={styles.themeSwitch}
      >
      {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  )
}

// return (
//   <button
//     onClick={(event) => {
//       if (document.body.classList.contains('dark')) {
//         document.body.classList.remove('dark')
//         event.currentTarget.innerHTML = 'Light Theme'
//       } else {
//         document.body.classList.add('dark')
//         event.currentTarget.innerHTML = 'Dark Theme'
//       }
//       // document.body.classList.toggle('dark')
//     }}
//     className={styles.themeSwitch}
//   >
//     Switch Theme
//   </button>
// )

// <button
// onClick={() => {
//   if (theme === 'dark') {
//     document.body.classList.remove('dark')
//     setTheme('light')
//   } else {
//     document.body.classList.add('dark')
//     setTheme('dark')
//   }
// }}
// className={styles.themeSwitch}
// >
// {theme === 'light' ? 'Light' : 'Dark'}
// </button>
