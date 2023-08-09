import Link from 'next/link'
import styles from './not-found.module.css'

export default function MovieNotFound() {
  return (
    <>
      <h1 className={styles.title}>Movie not found</h1>
      <p>We haven’t been able to find a movie at this address.</p>
      <p>
        Perhaps you’d be interested in{' '}
        <Link href="/movies">Popular Movies</Link> instead?
      </p>
    </>
  )
}
