import { useState, useEffect } from "react";

export function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const storedTheme = localStorage.getItem(key)
    if (storedTheme) {
      setValue(storedTheme)
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  const [] = useTheme(value)

  return [value, setValue]
}


export function useTheme(theme) {
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])
  return theme
}
