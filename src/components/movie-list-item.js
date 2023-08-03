import styles from './movie-list-item.module.css'
import Link from 'next/link'

export function MovieListItem({ movie }) {
  return (
    <Link href={`/movies/${movie.id}`} className={styles.clickable}>
      <li className={`${styles.movieListItem} ${movie.featured && styles.featured}`}>
        {movie.title}
      </li>
    </Link>
  )
}
