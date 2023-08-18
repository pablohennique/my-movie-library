'use client'
import { useState } from 'react'
// import { useEffect } from 'react'
import styles from './theme-switch.module.css'

export function ThemeSwitch() {
  const [theme, setTheme] = useState('light')

  // useEffect(() => {
  //   {theme === 'dark' && document.body.classList.add('dark')}
  // })

  return (
    <button
      onClick={() => {
        if (theme === 'dark') {
          document.body.classList.remove('dark')
          setTheme('light')
        } else {
          document.body.classList.add('dark')
          setTheme('dark')
        }
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
