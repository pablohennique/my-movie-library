import styles from './page.module.css'

export const metadata = {
  title: 'About',
  description: 'Learn more about My Movie Library',
}

export default function AboutPage() {
  return (
    <>
      <h1 className={styles.aboutTitle}>About</h1>
      <p>This app was created with React and Next.js</p>
      <p>Created by Pablo Hennique</p>
      <p>phennique@gmail.com</p>
    </>
  )
}
