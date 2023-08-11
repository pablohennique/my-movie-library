import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function HomePage() {
  const appTitle = 'Welcome To The Movie Library'
  const displayTitle = true
  const uppercaseTitle = false
  const uppercaseTernary = uppercaseTitle ? appTitle.toUpperCase() : appTitle

  return (
      <>
        <div className={styles.flexContainer}>
          <div>
            <h1>{displayTitle && uppercaseTernary}</h1>
            <h2>Explore trending movies, choose your favourite</h2>
          </div>
            <Link className="button" href="/movies">
                Start Exploring
            </Link>.
        </div>
        <div className={styles.bannerContainer}>
          <Image
            src='/old-film-banner.jpeg'
            alt="old film banner image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </>
  )
}
