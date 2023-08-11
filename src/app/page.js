import Link from 'next/link'
// import Image from 'next/image'
import styles from './page.module.css'

export default function HomePage() {
  const appTitle = 'Welcome To The Movie Library'
  const displayTitle = true
  const uppercaseTitle = true
  const uppercaseTernary = uppercaseTitle ? appTitle.toUpperCase() : appTitle

  return (
      <div className={`${styles.landingContainer} ${styles.negativeMargin}`}>
        <div className={styles.landingTitle}>
          <div>
            <h1>{displayTitle && uppercaseTernary}</h1>
            <h2 className='hidden'>Explore and choose from a list of popular movies</h2>
          </div>
            <Link className={styles.landingButton} href="/movies">
                EXPLORE MOVIES
            </Link>
        </div>
    </div>
  )
}
